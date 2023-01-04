import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import styled from 'styled-components';
import { useState } from 'react';

const WrapApp = styled.div`
  background-color: ${props => props.theme.colors.background};
  height: 100%;
  background-attachment: fixed;
  filter: ${props => (props.blur ? 'blur(10px)' : 'blur(0)')};
`;

const Homepage = lazy(() => import('pages/Homepage'));
const Projects = lazy(() => import('pages/Projects/Projects'));
const AboutPage = lazy(() => import('pages/AboutPage/AboutPage'));

// const blurApp = showModal => {
//   if (showModal) {
//     `filter: blur(5px)`;
//   }
//   return;
// };

export const App = () => {
  const [blur, setBlur] = useState(false);

  return (
    <WrapApp blur={blur}>
      <Navigation setBlur={setBlur} />
      <Suspense fallback={<div>Loading...</div>}>
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
