import Repository from "./Repository";

export default class ReportsRepository {
  static fetchReports(page: number, pageSize: number) {
    return Repository.get(`/reports?page=${page}&per_page=${pageSize}`);
  }
}
