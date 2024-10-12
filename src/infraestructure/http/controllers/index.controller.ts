import { Response } from "express";
import { ControllerBuilder } from "../../../utils/controllerBuilder.util";
import { EnvironmentEnum } from "../../../enums/environment.enum";
import Core from "../../Core";

export const indexController = ControllerBuilder(() => {
  return {
    message: "Server is on!",
  };
});

export const notFoundController = ControllerBuilder((_, res) => {
  res.status(404);
  return {
    message: "Source not Found",
  };
});

const NODE_ENV = Core.getEnvironment(EnvironmentEnum.NODE_ENV);

export const serverErrorController = (
  err: unknown,
  _: any,
  res: Response,
  __: any
) => {
  console.error(err);

  res.status(500).json({
    message: "Internal Server Error",
    error: NODE_ENV === "development" ? err : undefined,
  });
};
