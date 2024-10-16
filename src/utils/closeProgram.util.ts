import Core from "../infrastructure/Core";

export const closeProgram = async (arg?: unknown) => {
  await Core.instance.stop();

  if (arg instanceof Error) {
    console.error(arg.message);
    process.exit(1);
  }

  console.log(arg);
  process.exit(0);
};
