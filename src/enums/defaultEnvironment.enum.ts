import { EnvironmentEnum } from "./environment.enum";

export const DefaultEnvironmentEnum = {
  [EnvironmentEnum.TCP_PORT]: 3000,
  [EnvironmentEnum.NODE_ENV]: "development",
} as const;
