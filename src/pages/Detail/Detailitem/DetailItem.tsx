import styled from 'styled-components';
import { ContentProps } from 'utils/Type';
import IssueCard, { ListItemBox } from 'components/IssueCard';

import MarkDown from './MarkDown';

const DetailItem = ({ props }: ContentProps) => {
  return (
    <ListItemBox>
      <IssueCard props={props} />
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

export default DetailItem;
