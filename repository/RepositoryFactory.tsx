import AuthRepository from "./AuthRepository";
import UsersRepository from "./UsersRepository";
const repositories = {
  auth: AuthRepository,
  users: UsersRepository,
};

export const RepositoryFactory = {
  get: <T extends keyof typeof repositories>(
    name: T
  ): (typeof repositories)[T] => {
    return repositories[name];
  },
};