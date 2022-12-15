import styled from 'styled-components';

const Box = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

export default function Container({ children }) {
  return <Box>{children}</Box>;
}
