import { useNavigate } from 'react-router-dom';
import { IssueType } from 'src/types/IssueType';
import styled from 'styled-components';
import { formatDate } from 'utils/dateFormat';

type IssueItemType = {
  issue: IssueType;
};

const IssueItem = ({ issue }: IssueItemType) => {
  console.log(issue);
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/${issue.number}`)}>
      <Column>
        <Row>
          #{issue.number} {issue.title}
        </Row>
        <Row>
          작성자: {issue.user.login}, 작성일: {formatDate(issue.created_at)}
        </Row>
      </Column>
      <Comment>코멘트: {issue.comments}</Comment>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  cursor: pointer;

  & + & {
    border-top: 0.1em ${props => props.theme.borderColor} solid;
  }

  :hover {
    background-color: ${props => props.theme.subBgColor};
  }
`;

const Column = styled.div`
  flex-direction: column;
`;

const Row = styled.div``;

const Description = styled.div``;

const Comment = styled.div``;

// const;

export default IssueItem;
