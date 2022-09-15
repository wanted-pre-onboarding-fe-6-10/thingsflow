import { IssueType } from 'src/types/IssueType';
import styled from 'styled-components';
import { formatDate } from 'utils/dateFormat';

type IssueItemType = {
  issue: IssueType;
  focusedIssue: number;
  setFocusedIssue: any;
};

interface WrapperProps {
  focused: boolean;
}

const IssueItem = ({ issue, focusedIssue, setFocusedIssue }: IssueItemType) => {
  return (
    <Wrapper onClick={() => setFocusedIssue(issue.number)} focused={issue.number === focusedIssue}>
      <Column>
        <Row>
          <Title>[#{issue.number}] </Title>
          <Title>{issue.title}</Title>
        </Row>
        <Row>
          <Description>
            작성자: {issue.user.login} / 작성일: {formatDate(issue.created_at)}
          </Description>
        </Row>
      </Column>
      <Comment>코멘트: {issue.comments}</Comment>
    </Wrapper>
  );
};

const Wrapper = styled.div.attrs((props: WrapperProps) => ({
  focused: props.focused,
}))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  border-radius: 1rem;
  background-color: ${props => (props.focused ? props.theme.ownColor : props.theme.bgColor)};
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.ownColorHover};
  }
`;

const Column = styled.div`
  flex-direction: column;
`;

const Row = styled.div`
  & + & {
    margin-top: 0.5rem;
  }
`;

const Title = styled.span`
  font-size: medium;
  font-weight: 600;
`;

const Description = styled.div`
  font-size: small;
  color: ${props => props.theme.subTextColor};
`;

const Comment = styled.div`
  font-size: small;
  text-align: end;
  white-space: nowrap;
`;

export default IssueItem;
