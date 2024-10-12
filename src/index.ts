import Core from "./infraestructure/Core";
import MongoConnection from "./database/MongoConnection.database";
import {
  notFoundController,
  serverErrorController,
} from "./infraestructure/http/controllers/index.controller";
import indexRouter from "./infraestructure/http/routes/index.routes";
import { closeProgram } from "./utils/closeProgram.util";

const mongoConnection = MongoConnection.instance;
const core = Core.instance;

core.mongoConnection = mongoConnection;

process.on("SIGINT", closeProgram);
process.on("SIGTERM", closeProgram);
process.on("uncaughtException", closeProgram);
process.on("unhandledRejection", closeProgram);

core.start();

core.app?.use("/", indexRouter);
core.app?.use(notFoundController);
core.app?.use(serverErrorController);
