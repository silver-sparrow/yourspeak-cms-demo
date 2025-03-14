import AuthRepository from "./AuthRepository";
import TagsRepository from "./TagsRepository";
import UsersRepository from "./UsersRepository";
import ReportsRepository from "./ReportsRepository";

const repositories = {
  auth: AuthRepository,
  users: UsersRepository,
  tags: TagsRepository,
  reports: ReportsRepository,
};

export const RepositoryFactory = {
  get: <T extends keyof typeof repositories>(
    name: T
  ): (typeof repositories)[T] => {
    return repositories[name];
  },
};
