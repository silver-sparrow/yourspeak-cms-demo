import Repository from "./Repository";
export default class TagsRepository {
  static fetchTags(page: number, pageSize: number) {
    return Repository.get(`/tags?page=${page}&per_page=${pageSize}`);
  }
}
