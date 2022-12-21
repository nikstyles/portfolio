import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import styled from 'styled-components';

const WrapApp = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 100%;
  background-attachment: fixed;
`;

const Homepage = lazy(() => import('pages/Homepage'));
const Projects = lazy(() => import('pages/Projects/Projects'));
const About = lazy(() => import('pages/About/About'));

export const App = () => {
  return (
    <WrapApp>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Homepage />} />
        </Routes>
      </Suspense>
    </WrapApp>
  );
};