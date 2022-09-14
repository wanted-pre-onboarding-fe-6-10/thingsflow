import styled from 'styled-components';

const Loading = () => {
  return <Container />;
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
`;
