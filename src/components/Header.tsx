import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <span>Angular / Augular-cli</span>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  text-align: center;
  margin: 1rem 0;

  span {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
