import { useContext } from 'react';
import { IssueContext } from './IssueProvider';
import styled from 'styled-components';
import dateConvert from 'utils/convertStringTodate';
import { useNavigate } from 'react-router-dom';

const IssueBox = () => {
  const nav = useNavigate();
  const adUrl = 'https://thingsflow.com/ko/home';
  const adImg = '/띵스플로우.png';
  const { issues } = useContext(IssueContext);

  return (
    <Container>
      {issues.map((issue, index) => {
        return (
          <Box key={issue.id}>
            {index === 4 && (
              <AdBox href={adUrl}>
                <AdImg src={adImg} alt="img" />
              </AdBox>
            )}
            <IssueInfo onClick={() => nav(`/${issue.number}`)}>
              <Wrapper>
                <TitleBox>
                  <Title>#{issue.number} </Title>
                  <Title> {issue.title} </Title>
                </TitleBox>
                <SubInfo>
                  <InfoText>작성자: {issue.user.login},</InfoText>
                  <InfoText>작성일: {dateConvert(issue.created_at)}</InfoText>
                </SubInfo>
              </Wrapper>
              <Comments>{issue.comments}</Comments>
            </IssueInfo>
          </Box>
        );
      })}
    </Container>
  );
};

export default IssueBox;

const Container = styled.div`
  background-color: #eeeeee;
  border-radius: 5px;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AdImg = styled.img`
  width: 20%;
`;
const TitleBox = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Title = styled.span``;
const InfoText = styled.span``;

const SubInfo = styled.p`
  font-size: 0.8rem;
`;

const IssueInfo = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  width: 80%;
  border-bottom: 1px solid black;
  cursor: pointer;
`;

const AdBox = styled.a`
  text-align: center;
  margin: 2rem 0;
`;

const Comments = styled.p`
  margin: 1rem;
  display: flex;
  align-items: center;
`;
const Wrapper = styled.div`
  margin: 0 1rem;
  width: 90%;
`;
