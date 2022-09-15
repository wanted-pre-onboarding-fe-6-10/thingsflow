import { AxiosInstance } from 'axios';

class IssueService {
  httpClient: AxiosInstance;
  targetRepository: string;

  constructor(httpClient: AxiosInstance) {
    this.httpClient = httpClient;
    this.targetRepository = 'angular/angular-cli';
  }

  setTargetRepository(targetRepository: string) {
    this.targetRepository = targetRepository;
  }

  getAllIssues = async (targetRepository: string, page: number) => {
    const response = await this.httpClient.get(
      targetRepository + `/issues?per_page=20&page=${page}`
    );
    if (response.status !== 200) throw Error(response.statusText);
    return response;
  };

  getOpenIssues = async (targetRepository: string, page: number) => {
    const response = await this.httpClient.get(
      targetRepository + `/issues?sort=comments&state=open&per_page=20&page=${page}`
    );
    if (response.status !== 200) throw Error(response.statusText);
    return response;
  };

  getIssueDetail = async (targetRepository: string, number: number) => {
    const response = await this.httpClient.get(targetRepository + `/issues/${number}`);
    if (response.status !== 200) throw Error(response.statusText);
    return response;
  };
}

export default IssueService;
