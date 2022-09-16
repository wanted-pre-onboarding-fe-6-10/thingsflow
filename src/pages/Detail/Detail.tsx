import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Loading from 'components/Loading';
import { getIssueItem } from 'api/issueApi';
import MarkdownRenderer from 'components/MarkdownRenderer';

const Detail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [detailData, setDetailData] = useState<DetailType | null>(null);

  const { number } = useParams();

  /*
  [리팩토링]
   async-await를 불필요하게 썻음
   : 어싱크를 쓰는 이유는 뒤에 어떤 처리가 있는데 일단 실행되지 않고 기다리게 하려고 쓰는건데
   여긴 그냥 reponse받고 끝임.
   따라서 그냥 .then한번만 쓰는 코드로 되는거라면 굳이 어씽크 안써도 되는것임!!

   : then으로 하면 useEffect 안에서 바로 처리가 되는데, 굳이 어렵게 됨.
  */

  /*
 어씽크는 가급적 쓰지 말고,then으로 웬만하면 쓰기!! ⭐️
 */

  const getRequest = async () => {
    // [리팩토링]
    const response = await getIssueItem(number);

    if (response.status === 200) {
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      setDetailData(response.data);
    }
  };

  useEffect(() => {
    getRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        detailData && (
          <DetailWrapper>
            <TitleBox>
              <UserImg src={detailData.user.avatar_url} alt="userImg" />

              <TitleContainer>
                <Number style={{ fontWeight: 'bold' }}>#{detailData.number}</Number>

                <Title>{detailData.title}</Title>

                <p>
                  <span>작성자 : {detailData.user.login} ,</span>
                  <span> 작성일 : {new Date(detailData.created_at).toLocaleString()}</span>
                </p>
              </TitleContainer>

              <div>코멘트 {detailData.comments}</div>
            </TitleBox>
            <Content>
              <MarkdownRenderer content={detailData.body} />
            </Content>
          </DetailWrapper>
        )
      )}
    </div>
  );
};

export default Detail;

const DetailWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const TitleBox = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 1fr;
  align-items: center;
  border-bottom: 1px solid black;
  padding: 1rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
`;

const UserImg = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const TitleContainer = styled.div`
  padding: 2rem;
  padding-bottom: 1rem;
`;

const Title = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const Number = styled.p`
  font-weight: bold;
  margin-right: 2rem;
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  line-height: 1.5rem;
`;

interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Label {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

interface Reactions {
  url: string;
  total_count: number;
  '+1': number;
  '-1': number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
}

interface DetailType {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: User;
  labels: Label[];
  state: string;
  locked: boolean;
  assignee?: unknown;
  assignees: unknown[];
  milestone?: unknown;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: unknown;
  author_association: string;
  active_lock_reason?: unknown;
  body: string;
  closed_by?: unknown;
  reactions: Reactions;
  timeline_url: string;
  performed_via_github_app?: unknown;
  state_reason?: unknown;
}
