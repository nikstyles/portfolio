import styled from 'styled-components';

const Box = styled.div`
  margin: 0 auto;
  padding: 0 15px;

  @media (max-width: 1100px) {
    width: 768px;
  }
  @media (max-width: 2000px) and (min-width: 768px) {
    max-width: 1200px;
  }
`;

export default function Container({ children }) {
  return <Box>{children}</Box>;
}
