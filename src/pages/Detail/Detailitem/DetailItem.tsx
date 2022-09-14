import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { detailDate } from 'utils/getDate';
import { IssueType } from 'utils/Type';
import {
  ListComments,
  ListCreatedAt,
  ListID,
  ListImg,
  ListImgWrapper,
  ListItem,
  ListItemBox,
  ListItemWrapper,
  ListNumber,
  ListNumberWrapper,
  ListTitle,
  ListTitleWrapper,
} from './../../Issue/IssueList/IssueList';
import MarkDown from './MarDown';

interface Props {
  props: IssueType;
}

const DetailItem = ({ props }: Props) => {
  const [date, setDate] = useState<string>();
  useEffect(() => {
    const res = detailDate(props.created_at);
    setDate(res);
  }, [props.created_at]);
  return (
    <ListItemBox>
      <ListItemWrapper>
        <ListImgWrapper>
          <ListImg src={props.user.avatar_url} />
        </ListImgWrapper>
        <ListItem>
          <ListTitleWrapper>
            <ListNumber>#{props.number}</ListNumber>
            <ListTitle>{props.title}</ListTitle>
            <ListID>{props.user.login}</ListID>
          </ListTitleWrapper>
          <ListNumberWrapper>
            <ListComments>Comment : {props.comments}</ListComments>
            <ListCreatedAt>{date}</ListCreatedAt>
          </ListNumberWrapper>
        </ListItem>
      </ListItemWrapper>
      <BodyWrapper>
        <MarkDown markdown={props.body} />
      </BodyWrapper>
    </ListItemBox>
  );
};
const BodyWrapper = styled.div`
  border-radius: 1rem;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${props => props.theme.bgColor};
`;
const Body = styled.div``;

export default DetailItem;
