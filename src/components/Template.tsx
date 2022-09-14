import styled from 'styled-components';

type WrapperProps = {
  children: React.ReactNode;
};

const Template = ({ children }: WrapperProps) => {
  return <Container>{children}</Container>;
};

export default Template;

const Container = styled.div`
  width: 1400px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    width: 100%;
    padding: 1rem;
  }
`;
