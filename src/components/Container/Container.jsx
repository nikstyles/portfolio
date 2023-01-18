import styled from 'styled-components';

const Box = styled.div`
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  max-width: 320px;
  box-sizing: border-box;

  @media (max-width: 1100px) {
    width: 768px;
  }
  @media (min-width: 768px) {
    max-width: 1200px;
  }
`;

export default function Container({ children }) {
  return <Box>{children}</Box>;
}
