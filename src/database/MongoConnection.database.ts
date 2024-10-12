import mongoose, { connect } from "mongoose";

export default class MongoConnection {
  private static _instance: MongoConnection;
  private constructor() {}
  public static get instance() {
    if (!this._instance) {
      this._instance = new MongoConnection();
    }
    return this._instance;
  }

  private connection: null | typeof mongoose = null;

  public async connect(MONGO_URI: string) {
    this.connection = await connect(MONGO_URI);

    console.log("Connected to MongoDB");
  }

  public async disconnect() {
    await this.connection?.disconnect();
    console.log("Disconnected from MongoDB");
  }
}
