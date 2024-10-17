import { compareSync, genSalt, hash } from "bcrypt";
import UserModel from "../../models/dao/User.dao";
import CreateUserDto from "../../models/dto/CreateUser.dto";
import LoginDto from "../../models/dto/Login.dto";
import TokenDataDto from "../../../jwt/entity/dto/TokenData.dto";
import UserEntity from "../../models/entity/User.entity";
import UserService from "../services/User.service";
import { BadRequestException } from "../../../../utils/exceptions.util";
import JwtService from "../../../jwt/domain/service/Jwt.service";

export default class UserApplication implements UserService {
  private readonly jwtService: JwtService;

  constructor(jwtService: JwtService) {
    this.jwtService = jwtService;
  }

  async login(loginDto: LoginDto): Promise<string> {
    const mongoQuery = loginDto.identifier.includes("@")
      ? { email: loginDto.identifier }
      : { username: loginDto.identifier };

    const user = await UserModel.findOne(mongoQuery);

    if (!user) {
      throw new BadRequestException("Credenciales incorrectas");
    }

    if (!compareSync(loginDto.password, user.password!)) {
      throw new BadRequestException("Credenciales incorrectas");
    }

    const tokenData = new TokenDataDto({
      alias: user.alias,
      username: user.username,
    });

    return await this.jwtService.encode(tokenData);
  }

  //TODO: Implement this method
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logout(_tokenString: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async register(createUserDto: CreateUserDto): Promise<UserEntity> {
    const hashedPassword = await hash(
      createUserDto.password,
      await genSalt(10),
    );

    const user = new UserModel({
      username: createUserDto.username,
      alias: createUserDto.username,
      password: hashedPassword,
      email: createUserDto.email,
      emailValidated: false,
    });

    const [usernameExist, emailExist] = await Promise.all([
      UserModel.exists({ username: createUserDto.username }),
      UserModel.exists({ email: createUserDto.email }),
    ]);

    if (usernameExist) {
      throw new BadRequestException("El nombre de usuario ya existe");
    }

    if (emailExist) {
      throw new BadRequestException("El correo ya está registrado");
    }

    return user.save();
  }
}
