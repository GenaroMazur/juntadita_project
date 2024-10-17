import TokenDataDto from "../modules/jwt/entity/dto/TokenData.dto";

declare module "express" {
  interface Response {
    locals: {
      tokenData?: TokenDataDto;
    };
  }
}
