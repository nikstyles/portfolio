import styled from 'styled-components';
import mykyta_2 from '../../images/mykyta_2.jpg';
import ExperienceList from './ExperienceList/ExperienceList';

const WrapAbout = styled.div`
  box-sizing: border-box;

  background-color: ${props => props.theme.colors.darkSecondary};
  border-radius: ${props => props.theme.radii.big};
  margin-top: 70px;
  padding: 30px 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
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
`;

const WrapExperienceEducation = styled.div`
  padding-top: 50px;
  padding-bottom: 130px;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
// const WrapExperience = styled.div`
//   background-color: ${props => props.theme.colors.darkSecondary};
//   border-radius: ${props => props.theme.radii.big};
//   padding: 30px;
//   max-width: 780px;
//   position: relative;
// `;
const WrapEducation = styled.div`
  background-color: ${props => props.theme.colors.darkSecondary};
  border-radius: ${props => props.theme.radii.big};
  padding: 30px;
  /* width: 250px; */
  position: relative;
`;

const Title = styled.h2`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  text-transform: uppercase;
  padding-bottom: 20px;
`;

const SecondaryTitle = styled.h3`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.heading};
  padding-top: 30px;
  padding-bottom: 10px;
`;
const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
`;
const BgTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.096);
  width: 100%;
  height: 80px;
  border-top-right-radius: ${props => props.theme.radii.big};
  border-top-left-radius: ${props => props.theme.radii.big};
`;

export default function About() {
  return (
    <>
      <WrapAbout>
        <Photo src={mykyta_2} alt="x" />
        <AboutText>
          I am a Junior Front-End developer looking for a remote job in a
          company, where I can apply my experience. I focus on HTML, CSS,
          JavaScript, and React. I have hands-on experience in teamwork. I am
          motivated to work and to learn and open to new opportunities.
        </AboutText>
      </WrapAbout>
      <WrapExperienceEducation>
        <ExperienceList />

        <WrapEducation>
          <BgTitle />
          <Title>EDUCATION</Title>
          <SecondaryTitle>Full stack developer</SecondaryTitle>
          <Text>IT School GoIT (February 2022 - till now)</Text>

          <SecondaryTitle>Ceramic artist</SecondaryTitle>
          <Text>Kyiv Industrial College (2010-2014)</Text>
        </WrapEducation>
      </WrapExperienceEducation>
    </>
  );
}
