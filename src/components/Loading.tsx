import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <Cycle />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(240, 248, 255, 0.7);
`;

const spin = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

const Cycle = styled.div`
  width: 200px;
  height: 100px;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    margin-left: -32px;
    border-radius: 50%;
    border: 7px solid lightgrey;
    border-top-color: blue;
    animation: ${spin} 0.8s linear infinite;
  }
`;
