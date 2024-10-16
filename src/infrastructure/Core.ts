import { Application } from "express";
import { EnvironmentEnum } from "../enums/environment.enum";
import { Server as HttpServer } from "node:http";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import MongoConnection from "../database/MongoConnection.database";

export default class Core {
  private constructor() {}

  private http: HttpServer | null = null;
  public app: Application | null = null;
  public mongoConnection: MongoConnection | null = null;

  private static _instance: Core;
  static get instance() {
    if (!this._instance) {
      this._instance = new Core();
      this._instance.app = express();
      this._instance.http = new HttpServer(this._instance.app);
    }
    return this._instance;
  }

  public static getEnvironment(environment: EnvironmentEnum) {
    const value = process.env[environment];

    if (value === undefined) {
      throw new Error(`Environment variable ${environment} not set.`);
    }

    return value;
  }

  public getEnvironment(environment: EnvironmentEnum) {
    return Core.getEnvironment(environment);
  }

  public async start() {
    const TCP_PORT = this.getEnvironment(EnvironmentEnum.TCP_PORT);
    const NODE_ENV = this.getEnvironment(EnvironmentEnum.NODE_ENV);

    const MONGO_URI = this.getEnvironment(EnvironmentEnum.MONGO_URI);

    await this.mongoConnection?.connect(MONGO_URI);

    this.app?.use(
      cors(),
      helmet(),
      morgan(NODE_ENV === "development" ? "dev" : "common"),
      express.json(),
      express.urlencoded({ extended: true }),
    );

    this.http?.listen(TCP_PORT, () => {
      console.log(`Server running in ${NODE_ENV} mode`);
      console.log(`Server listening on port ${TCP_PORT}`);
    });
  }

  public stop() {
    return new Promise<void>((resolve) => {
      this.http?.close(async () => {
        console.log("Server stopped");
        await this.mongoConnection?.disconnect();
        resolve();
      });
    });
  }
}
