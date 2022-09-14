import { AxiosInstance } from 'axios';

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

  getAllIssues = (page: number) => {
    const response = this.httpClient.get(
      this.targetRepository + `/issues?per_page=20&page=${page}`
    );
    return response;
  };

  getOpenIssues = (page: number) => {
    const response = this.httpClient.get(
      this.targetRepository + `/issues?sort=comments&state=open&per_page=20&page=${page}`
    );
    return response;
  };

  getIssueDetail = (number: number) => {
    const response = this.httpClient.get(this.targetRepository + `/issues/${number}`);
    return response;
  };
}

export default IssueService;
