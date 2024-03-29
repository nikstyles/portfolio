import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import styled from 'styled-components';
import { useState } from 'react';
import { GlobalStyles } from 'utilities/styles/global.styles';
import Loading from './Loading/Loading';

const WrapApp = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  background-size: 100%;

  filter: ${props => (props.blur ? 'blur(10px)' : 'blur(0)')};
`;

const Homepage = lazy(() => import('pages/Homepage'));
const Projects = lazy(() => import('pages/Projects/Projects'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));

export const App = () => {
  const [blur, setBlur] = useState(false);

  return (
    <WrapApp blur={blur}>
      <GlobalStyles />
      <Navigation setBlur={setBlur} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Suspense>
    </WrapApp>
  );
};
