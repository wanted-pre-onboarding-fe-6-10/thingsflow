import { useContext } from 'react';
import AppContext from '../../../AppContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const IssueItem = () => {
  const appContext = useContext(AppContext);
  const issueListData = appContext.issueListData; // [] , [{},{},{}...]

  const navigator = useNavigate();

  return (
    <>
      {issueListData.map((data, idx) => (
        <ItemWrapper key={data.id} onClick={() => navigator(`${data.number}`)}>
          <div>{data.number}</div>

          <div>
            <Title>{data.title}</Title>
            <p>
              작성자 {data.user.login} , 작성일 {`${data.created_at}`}
            </p>
          </div>

          <div>코멘트 : {data.comments}</div>
        </ItemWrapper>
      ))}
    </>
  );
};

export default IssueItem;

const ItemWrapper = styled.div`
  width: 70%;
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-template-rows: 1fr;
  border-bottom: 1px solid black;
  margin: 2rem auto;
  padding-bottom: 1.5rem;
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  padding-right: 1.5rem;
`;
