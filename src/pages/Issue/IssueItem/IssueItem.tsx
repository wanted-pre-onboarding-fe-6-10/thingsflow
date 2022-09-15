import { useContext } from 'react';
import AppContext from '../../../AppContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const IssueItem = () => {
  const appContext = useContext(AppContext);
  const { issueListData } = appContext;

  return (
    <ItemWrapper>
      {issueListData.map(data => {
        if (data.type === 'ad') {
          return (
            <a href="https://thingsflow.com/ko/home" target="_blank" key={data.id} rel="noreferrer">
              <AdBox>
                <LogoImg src="/띵스플로우.png" alt="img" />
              </AdBox>
            </a>
          );
        }

        return (
          <ItemBox key={data.id}>
            <div>{data.number}</div>
            <div>
              <Link to={`${data.number}`}>
                <Title>{data.title}</Title>
              </Link>
              <p>
                <span>작성자 : {data.user.login} , </span>
                <span> 작성일 : {new Date(data.created_at).toLocaleString()}</span>
              </p>
            </div>

            <div>코멘트 {data.comments}</div>
          </ItemBox>
        );
      })}
    </ItemWrapper>
  );
};

export default IssueItem;

const ItemWrapper = styled.div`
  width: 70%;
  margin: 2rem auto;
`;

const AdBox = styled.div`
  height: 6rem;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const LogoImg = styled.img`
  height: inherit;
`;

const ItemBox = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 1fr;
  border-bottom: 1px solid black;

  padding: 1.5rem 0;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-right: 1.5rem;
`;
