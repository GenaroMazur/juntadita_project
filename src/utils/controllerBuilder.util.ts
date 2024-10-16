import { NextFunction, Request, Response } from "express";

export function ControllerBuilder(
  controller: (
    request: Request,
    response: Response,
    next: (err?: Error) => void,
  ) => unknown | Promise<unknown>,
) {
  return async (request: Request, response: Response, next: NextFunction) => {
    try {
      let nextActive = false;
      const nextFunction = (err?: Error) => {
        nextActive = true;
        next(err);
      };

      const resp = await controller(request, response, nextFunction);

      if (response.headersSent) return;
      if (nextActive) return;

      response.json(resp);
    } catch (error) {
      next(error);
    }
  };
}
