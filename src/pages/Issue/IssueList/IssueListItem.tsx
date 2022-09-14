import styled from 'styled-components';
import { IssueType } from 'utils/Type';

interface Props {
  list: IssueType;
}

const IssueListItem = ({ list }: Props) => {
  return (
    <ListItemBox>
      <ListItemWrapper>
        <ListItem>{list.number}</ListItem>
        <ListItem>{list.title}</ListItem>
        <ListItem>{list.user.id}</ListItem>
        <ListItem>{list.comments}</ListItem>
      </ListItemWrapper>
    </ListItemBox>
  );
};

//   <li>{v.number}</li>
//   <li>{v.title}</li>
//   <li>{v.user.id}</li>
//   <li>{v.comments}</li>
// <button onClick={() => getIssue(v.number, i)}>click</button>
// </IssueList>
const ListItemBox = styled.div``;
const ListItemWrapper = styled.ul``;
const ListItem = styled.li``;

export default IssueListItem;
