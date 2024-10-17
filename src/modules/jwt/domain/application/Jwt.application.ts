/* eslint-disable @typescript-eslint/no-unused-vars */
import ErrTokenDecodeDto from "../../entity/dto/ErrTokenDecode.dto";
import TokenDataDto from "../../entity/dto/TokenData.dto";
import JwtService from "../service/Jwt.service";

export default class JwtApplication implements JwtService {
  encode(_tokenDataDto: TokenDataDto): Promise<string> {
    //TODO: Implement this method
    throw new Error("Method not implemented.");
  }
  decode(_tokenString: string): Promise<ErrTokenDecodeDto | TokenDataDto> {
    //TODO: Implement this method
    throw new Error("Method not implemented.");
  }
}
