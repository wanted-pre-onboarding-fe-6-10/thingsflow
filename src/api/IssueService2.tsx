import instance from './axios.development';

// class IssueService {
//   httpClient: AxiosInstance;
//   targetRepository: string;

//   constructor(httpClient: AxiosInstance) {
//     this.httpClient = httpClient;
//     this.targetRepository = '';
//   }

//   setTargetRepository(targetRepository: string) {
//     this.targetRepository = targetRepository;
//   }

export const getIssues = async (page: number) => {
  const response = await instance.get('angular/angular-cli' + `/issues?per_page=20&page=${page}`);
  return response;
};

export const getOpenIssues = async (page: number) => {
  const response = await instance.get(
    'angular/angular-cli' + `/issues?sort=comments&state=open&per_page=20&page=${page}`
  );
  return response;
};

export const getIssueDetail = async (number: number) => {
  const response = instance.get('angular/angular-cli' + `/issues/${number}`);
  return response;
};
// }

// export default IssueService;
