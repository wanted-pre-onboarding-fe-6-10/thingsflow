import styled from 'styled-components';

const Spinner = () => {
  return <SpinnerDots />;
};

const SpinnerWrapper = styled.div`
  position: absolute;
  left: 400px;
  width: fit-content;
  align-self: center;
`;

const SpinnerDots = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #9880ff;
  color: #9880ff;
  -webkit-animation: dot-flashing 1s infinite linear alternate;
  animation: dot-flashing 1s infinite linear alternate;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;

  ::before,
  ::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  ::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    -webkit-animation: dot-flashing 1s infinite alternate;
    animation: dot-flashing 1s infinite alternate;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  ::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #9880ff;
    color: #9880ff;
    -webkit-animation: dot-flashing 1s infinite alternate;
    animation: dot-flashing 1s infinite alternate;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  @-webkit-keyframes dot-flashing {
    0% {
      background-color: #9880ff;
    }
    50%,
    100% {
      background-color: rgba(152, 128, 255, 0.2);
    }
  }

  @keyframes dot-flashing {
    0% {
      background-color: #9880ff;
    }
    50%,
    100% {
      background-color: rgba(152, 128, 255, 0.2);
    }
  }
`;

export default Spinner;
