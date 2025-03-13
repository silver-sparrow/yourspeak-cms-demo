import Repository from "./Repository";

export default class AuthRepository {
  static loginUser(payload: LOGIN_USER_PROPS["payload"]) {
    return Repository.post(`/login`, payload);
  }
}
