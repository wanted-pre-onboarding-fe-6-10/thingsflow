import { AxiosInstance } from 'axios';
import instance from './axios.development';

class IssueService {
  httpClient: AxiosInstance;
  targetRepository: string;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
    this.targetRepository = '';
  }

  setTargetRepository(targetRepository: string) {
    this.targetRepository = targetRepository;
  }

  getIssues(page: number) {
    const response = this.httpClient.get(
      this.targetRepository + `/issues?per_page=20&page=${page}`
    );
    return response;
  }

  getIssueDetail(number: number) {
    const response = this.httpClient.get(this.targetRepository + `/issues/${number}`);
    console.log(Object.keys(response));
    return response;
  }
}

export default IssueService;
