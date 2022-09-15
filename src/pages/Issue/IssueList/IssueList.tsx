import styled from 'styled-components';
import { IssueProps } from 'utils/Type';
import { Link } from 'react-router-dom';
import IssueCard, { ListImg } from 'components/IssueCard';
import { ListItemBox } from 'components/IssueCard';

const IssueList = ({ index, issue }: IssueProps) => {
  return (
    <>
      {index === 4 && (
        <AdvertisingBox>
          <AdvertisingImg
            src={`${process.env.PUBLIC_URL}/thingsflow.png`}
            onClick={() => window.open('https://thingsflow.com/ko/home')}
          />
        </AdvertisingBox>
      )}
      <ListItemBox>
        <Link to={`/${issue.number}`}>
          <IssueCard props={issue} />
        </Link>
      </ListItemBox>
    </>
  );
};

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
