abstract class httpException extends Error {
  httpCode: number;

  constructor(
    public status: number,
    public message: string,
  ) {
    super(message);
    this.httpCode = status;
  }
}

export class BadRequestException extends httpException {
  constructor(message: string) {
    super(400, message);
  }
}

export class UnauthorizedException extends httpException {
  constructor(message: string) {
    super(401, message);
  }
}

export class ForbiddenException extends httpException {
  constructor(message: string) {
    super(403, message);
  }
}

export class NotFoundException extends httpException {
  constructor(message: string) {
    super(404, message);
  }
}

export class ConflictException extends httpException {
  constructor(message: string) {
    super(409, message);
  }
}

export class InternalServerErrorException extends httpException {
  constructor(message: string) {
    super(500, message);
  }
}
