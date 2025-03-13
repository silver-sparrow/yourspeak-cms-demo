import AuthRepository from "./AuthRepository";
const repositories = {
  auth: AuthRepository,
};

export const RepositoryFactory = {
  get: <T extends keyof typeof repositories>(
    name: T
  ): (typeof repositories)[T] => {
    return repositories[name];
  },
};
