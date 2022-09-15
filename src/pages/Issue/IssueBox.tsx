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
              <Comments>코멘트{issue.comments}</Comments>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  align-items: center;
`;
const AdImg = styled.img`
  width: 10%;
`;
const TitleBox = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

const Title = styled.span`
  margin-right: 1rem;
`;
const InfoText = styled.span`
  margin-right: 1rem;
`;

const SubInfo = styled.p`
  font-size: 0.8rem;
`;

const IssueInfo = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 2rem auto;
  width: 80%;
  border-bottom: 1px solid #9e9e9e;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #9e9e9e;
  }
`;

const AdBox = styled.a`
  text-align: center;
  margin: 2rem 0;
  background-color: #fff;
`;

const Comments = styled.p`
  font-size: 0.8rem;
  margin: 1rem;
  display: flex;
  align-items: center;
  text-align: center;
`;
const Wrapper = styled.div`
  margin: 0 1rem;
  width: 90%;
`;
