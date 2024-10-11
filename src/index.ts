import Core from "./Core";
import { closeProgram } from "./utils/closeProgram.util";

const core = Core.instance;

process.on("SIGINT", closeProgram);
process.on("SIGTERM", closeProgram);
process.on("uncaughtException", closeProgram);
process.on("unhandledRejection", closeProgram);

core.start();
