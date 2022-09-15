import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { detailDate } from 'utils/getDate';
import { ContentProps } from 'utils/Type';

const IssueCard = ({ props }: ContentProps) => {
  const [date, setDate] = useState<string>();
  useEffect(() => {
    const res = detailDate(props.created_at);
    setDate(res);
  }, [props.created_at]);

  return (
    <ListItemWrapper>
      <ListImgWrapper>
        <ListImg src={props.user.avatar_url} />
      </ListImgWrapper>
      <ListItem>
        <ListTitleWrapper>
          <ListNumber>[#{props.number}]</ListNumber>
          <ListTitle>{props.title}</ListTitle>
          <ListID>{props.user.login}</ListID>
        </ListTitleWrapper>
        <ListNumberWrapper>
          <ListComments>Comment : {props.comments}</ListComments>
          <ListCreatedAt>{date}</ListCreatedAt>
        </ListNumberWrapper>
      </ListItem>
    </ListItemWrapper>
  );
};

export const ListItemBox = styled.div`
  padding: 0.5rem 1.2rem;
  margin-top: 0.5rem;
`;
export const ListItemWrapper = styled.ul`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: ${props => props.theme.boxColor};
  display: flex;
  align-items: center;
`;
export const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const ListTitleWrapper = styled.div`
  width: 70%;
  margin-right: 1rem;
`;
export const ListNumberWrapper = styled.div`
  width: 30%;
`;
export const ListImgWrapper = styled.div`
  background-color: ${props => props.theme.subBoxColor};
  margin-right: 1rem;
`;
export const ListImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin: 0.5rem;
`;
export const ListNumber = styled.li``;
export const ListTitle = styled.li`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
export const ListID = styled.li``;
export const ListComments = styled.li`
  margin-bottom: 0.5rem;
`;
export const ListCreatedAt = styled.li``;

export default IssueCard;
