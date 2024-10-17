import ErrTokenDecodeDto from "../../entity/dto/ErrTokenDecode.dto";
import TokenDataDto from "../../entity/dto/TokenData.dto";

export default interface JwtService {
  /**
   *
   * @param tokenDataDto token data transfer object to encode into a token string
   *
   * @returns returns a token string
   */
  encode(tokenDataDto: TokenDataDto): Promise<string>;

  /**
   *
   * @param tokenString token string to decode into a token data transfer object
   *
   * @returns returns a token data transfer object if the token is valid, otherwise returns an error token decode data transfer object
   */
  decode(tokenString: string): Promise<ErrTokenDecodeDto | TokenDataDto>;
}
