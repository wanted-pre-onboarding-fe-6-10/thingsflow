import styled from 'styled-components';

const Spinner = () => {
  return <SpinnerDots />;
};

const SpinnerDots = styled.div`
  position: relative;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.ownColor};
  color: ${props => props.theme.ownColor};
  -webkit-animation: dot-flashing 1s infinite linear alternate;
  animation: dot-flashing 1s infinite linear alternate;
  -webkit-animation-delay: 0.5s;
  animation-delay: 0.5s;
  margin-top: 1rem;

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
    background-color: ${props => props.theme.ownColor};
    color: ${props => props.theme.ownColor};
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
    background-color: ${props => props.theme.ownColor};
    color: ${props => props.theme.ownColor};
    -webkit-animation: dot-flashing 1s infinite alternate;
    animation: dot-flashing 1s infinite alternate;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
  }

  @-webkit-keyframes dot-flashing {
    0% {
      background-color: ${props => props.theme.ownColor};
    }
    50%,
    100% {
      background-color: rgba(255, 188, 32, 0.2);
    }
  }

  @keyframes dot-flashing {
    0% {
      background-color: ${props => props.theme.ownColor};
    }
    50%,
    100% {
      background-color: rgba(255, 188, 32, 0.2);
    }
  }
`;

export default Spinner;
