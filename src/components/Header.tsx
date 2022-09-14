import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const nav = useNavigate();
  return <HeaderBox onClick={() => nav('/')}>Angular/Angular-cli</HeaderBox>;
};

const HeaderBox = styled.div`
  position: sticky;
  text-align: center;
  font-size: 2.3rem;
  font-weight: bold;
  padding: 2rem;
  border-bottom: 1px solid #cfcfcf;
`;

export default Header;
