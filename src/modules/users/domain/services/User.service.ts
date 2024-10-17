import CreateUserDto from "../../models/dto/CreateUser.dto";
import LoginDto from "../../models/dto/Login.dto";
import UserEntity from "../../models/entity/User.entity";

export default interface UserService {
  /**
   * @description logs in the user and returns a bearer token if the login is successful
   * @param loginDto login data transfer object
   *
   * @returns returns a bearer token if the login is successful
   *
   * @throws BadRequestException if the login credentials are incorrect
   *
   */
  login(loginDto: LoginDto): Promise<string>;

  /**
   * @description logs out the user by invalidating the token
   * @param tokenString bearer token
   *
   * @returns void
   *
   */
  logout(tokenString: string): Promise<void>;

  /**
   * @description registers a new user and returns the user entity
   *
   * @param createUserDto create user data transfer object
   *
   * @returns returns the user entity if the registration is successful
   */
  register(createUserDto: CreateUserDto): Promise<UserEntity>;
}
