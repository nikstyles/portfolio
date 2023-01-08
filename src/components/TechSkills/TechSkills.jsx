import styled from 'styled-components';

const Wrap = styled.div`
  margin-top: 55px;
  padding-bottom: 150px;

  box-sizing: border-box;
`;
const TitleTechSkills = styled.h3`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
`;
const WrapTechSkills = styled.ul`
  padding-top: 15px;
  text-decoration: none;
  list-style: none;

  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  @media (max-width: 1200px) {
    justify-content: space-between;
    gap: 35px;
  }
  @media (max-width: 1200px) and (min-width: 1100px) {
    justify-content: space-between;
    gap: 0;
    flex-wrap: nowrap;
  }
  @media (max-width: 2000px) and (min-width: 1200px) {
    justify-content: space-between;
    gap: 0;
  }
`;
const ItemTechSkills = styled.li`
  box-sizing: border-box;

  padding: 25px 45px;
  background-color: ${props => props.theme.colors.darkSecondary};
  border-radius: ${props => props.theme.radii.big};
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.body};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1100px) {
    width: 230px;
  }
`;

export default function TechSkills() {
  return (
    <Wrap>
      <TitleTechSkills>TechSkills</TitleTechSkills>
      <WrapTechSkills>
        <ItemTechSkills>HTML</ItemTechSkills>
        <ItemTechSkills>CSS/SASS</ItemTechSkills>
        <ItemTechSkills>JavaScript</ItemTechSkills>
        <ItemTechSkills>React</ItemTechSkills>
        <ItemTechSkills>Redux</ItemTechSkills>
        <ItemTechSkills>Git</ItemTechSkills>
      </WrapTechSkills>
    </Wrap>
  );
}
