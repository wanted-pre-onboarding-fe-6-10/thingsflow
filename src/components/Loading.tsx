import styled from 'styled-components';

const Loading = () => {
  return (
    <Container>
      <img src="띵스플로우.png" alt="logo" />
    </Container>
  );
};

export default Loading;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  z-index: 10000;
  background-color: rgba(0, 0, 0, 0.7);

  img {
    width: 100px;
    height: 100px;
  }
`;
