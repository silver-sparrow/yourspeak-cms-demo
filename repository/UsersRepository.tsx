import Repository from "./Repository";

export default class UsersRepository {
  static fetchUsers(
    payload: FETCH_USERS_PROPS["payload"],
    page: number,
    pageSize: number
  ) {
    return Repository.get(
      `/profiles?page=${page}&per_page=${pageSize}${
        payload !== "all" ? `&selected_tab=${payload}` : ""
      }` 
    );
  }

  static userStatus(payload: USER_STATUS_PROPS["payload"]) {
    return Repository.post(
      `/profiles/${payload.id}/${payload.isActive ? "unverify" : "verify"}`
    );
  }

  static isUserDelete(userId: number) {
    return Repository.post(`/profiles/${userId}/delete`);
  }
}
