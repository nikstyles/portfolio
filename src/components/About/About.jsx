import styled from 'styled-components';
import mykyta_2 from '../../images/mykyta_2.jpg';
import ExperienceList from './ExperienceList/ExperienceList';
import EducationList from './EducationList/EducationList';
import { useTranslation } from 'react-i18next';

const WrapAbout = styled.div`
  box-sizing: border-box;

  background-color: ${props => props.theme.colors.darkSecondary};
  border-radius: ${props => props.theme.radii.big};
  margin-top: 30px;
  padding: 30px 30px;

  align-items: center;
  justify-content: center;
  gap: 35px;

  @media (min-width: 768px) {
    padding: 30px 50px;
    margin-top: 40px;
    display: flex;
  }
  @media (min-width: 1100px) {
    padding: 30px 90px;
    margin-top: 40px;
  }
  @media (min-width: 1200px) {
    margin-top: 70px;
  }
`;

const Photo = styled.img`
  border: 6px solid ${props => props.theme.colors.primary};
  max-width: 122px;
  max-height: 122px;
  border-radius: ${props => props.theme.radii.round};
`;

const AboutText = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  padding-top: 20px;
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

const WrapExperienceEducation = styled.div`
  margin-top: 30px;
  padding-bottom: 50px;

  justify-content: space-between;
  gap: 50px;
  @media (min-width: 768px) {
    display: flex;
    margin-top: 50px;
  }
`;
// const WrapExperience = styled.div`
//   background-color: ${props => props.theme.colors.darkSecondary};
//   border-radius: ${props => props.theme.radii.big};
//   padding: 30px;
//   max-width: 780px;
//   position: relative;
// `;
// const WrapEducation = styled.div`
//   background-color: ${props => props.theme.colors.darkSecondary};
//   border-radius: ${props => props.theme.radii.big};
//   padding: 30px;
//   /* width: 250px; */
//   position: relative;
// `;

// const Title = styled.h2`
//   color: ${p => p.theme.colors.text};
//   font-size: ${p => p.theme.fontSizes.l};
//   font-weight: ${p => p.theme.fontWeights.normal};
//   line-height: ${p => p.theme.lineHeights.heading};
//   text-transform: uppercase;
//   padding-bottom: 20px;
// `;

// const SecondaryTitle = styled.h3`
//   color: ${p => p.theme.colors.text};
//   font-size: ${p => p.theme.fontSizes.s};
//   font-weight: ${p => p.theme.fontWeights.medium};
//   line-height: ${p => p.theme.lineHeights.heading};
//   padding-top: 30px;
//   padding-bottom: 10px;
// `;
// const Text = styled.p`
//   color: ${p => p.theme.colors.text};
//   font-size: ${p => p.theme.fontSizes.s};
//   font-weight: ${p => p.theme.fontWeights.normal};
//   line-height: ${p => p.theme.lineHeights.body};
// `;
// const BgTitle = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   background-color: rgba(255, 255, 255, 0.096);
//   width: 100%;
//   height: 80px;
//   border-top-right-radius: ${props => props.theme.radii.big};
//   border-top-left-radius: ${props => props.theme.radii.big};
// `;

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <WrapAbout>
        <Photo src={mykyta_2} alt="x" />
        <AboutText>{t('About.about_myself')}</AboutText>
      </WrapAbout>
      <WrapExperienceEducation>
        <ExperienceList />
        <EducationList />
      </WrapExperienceEducation>
    </>
  );
}
