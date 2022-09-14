import styled from 'styled-components';
import { IssueType } from 'utils/Type';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { detailDate } from 'utils/getDate';

interface Props {
  index: number;
  list: IssueType;
}

const IssueList = ({ index, list }: Props) => {
  const [date, setDate] = useState<string>();
  useEffect(() => {
    const res = detailDate(list.created_at);
    setDate(res);
  }, []);

  return (
    <>
      {index === 4 && (
        <AdvertisingBox>
          <AdvertisingImg
            src={`${process.env.PUBLIC_URL}/thingsflow.png`}
            onClick={() => (window.location.href = 'https://thingsflow.com/ko/home')}
          />
        </AdvertisingBox>
      )}
      <ListItemBox>
        <Link to={`/${list.number}`}>
          <ListItemWrapper>
            <ListImgWrapper>
              <ListImg src={list.user.avatar_url} />
            </ListImgWrapper>
            <ListItem>
              <ListTitleWrapper>
                <ListNumber>#{list.number}</ListNumber>
                <ListTitle>{list.title}</ListTitle>
                <ListID>{list.user.login}</ListID>
              </ListTitleWrapper>
              <ListNumberWrapper>
                <ListComments>Comment : {list.comments}</ListComments>
                <ListCreatedAt>{date}</ListCreatedAt>
              </ListNumberWrapper>
            </ListItem>
          </ListItemWrapper>
        </Link>
      </ListItemBox>
    </>
  );
};

const ListItemBox = styled.div`
  padding: 0.5rem 1.2rem;
  margin-top: 0.5rem;
`;
const ListItemWrapper = styled.ul`
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: ${props => props.theme.boxColor};
  display: flex;
  align-items: center;
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
const ListTitleWrapper = styled.div`
  width: 70%;
  margin-right: 1rem;
`;
const ListNumberWrapper = styled.div`
  width: 30%;
`;
const ListImgWrapper = styled.div`
  background-color: ${props => props.theme.subBoxColor};
  margin-right: 1rem;
`;
const ListImg = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  margin: 0.5rem;
`;
const ListNumber = styled.li``;
const ListTitle = styled.li`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const ListID = styled.li``;
const ListComments = styled.li`
  margin-bottom: 0.5rem;
`;
const ListCreatedAt = styled.li``;
const AdvertisingBox = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AdvertisingImg = styled(ListImg)`
  width: auto;
  height: 10rem;
  cursor: pointer;
`;
export default IssueList;
