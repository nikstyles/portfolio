import Container from '../../components/Container/Container';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import items from './items';
import { BsGithub } from 'react-icons/bs';
import { CgBrowser } from 'react-icons/cg';

const ListProjects = styled.ul`
  margin-top: 55px;
  padding-bottom: 150px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const ItemProjects = styled.li`
  /* height: 340px; */
  width: 100%;

  /* max-width: 369px; */
  border-radius: ${props => props.theme.radii.big};
  background-color: rgba(255, 255, 255, 0.07);

  @media (min-width: 768px) {
    width: 354px;
  }
`;
const WrapCoverProject = styled.div`
  display: block;
  border-radius: ${props => props.theme.radii.big};
  /* z-index: -10; */
  /* max-width: 369px; */
  /* max-height: 276px; */
  overflow: hidden;
  position: relative;

  background: linear-gradient(transparent, #663ee1);
  @media (min-width: 768px) {
    /* max-width: 369px; */
    /* max-height: 272px; */
  }
  @media (min-width: 1101px) {
    /* max-width: 380px; */
    /* max-height: 276px; */
  }
`;
const CoverProject = styled.img`
  border-radius: 20px;
  border: solid 1px ${props => props.theme.colors.primary};
  /* width: 367px;
  height: 270px; */
  width: 100%;

  /* height: 100%; */

  @media (min-width: 768px) {
    /* width: 367px;
    height: 270px; */
  }
  @media (min-width: 1101px) {
    /* width: 378px;
    height: 274px; */
  }
  .image_cover:hover & {
    opacity: 10%;
  }
`;

const WrapLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const LinkButton = styled.a`
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  border-radius: ${props => props.theme.radii.big};
  background-color: ${props => props.theme.colors.text};
  text-decoration: none;
  color: ${props => props.theme.colors.background};

  :hover {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
  }
`;

const TitleName = styled.p`
  color: ${props => props.theme.colors.text};
`;
const WrapInfo = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 15px;
`;

const TechSkillsText = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.text};
  line-height: ${p => p.theme.lineHeights.body};

  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;

  color: ${props => props.theme.colors.text};

  width: 100%;
  height: 100%;
  padding: 0 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: translateY(100%);
  opacity: 0.01;
  transition: transform 500ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 1000ms cubic-bezier(0.4, 0, 0.2, 1);

  .image_cover:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default function Projects() {
  const elements = items.map(({ id, toSite, toGithub, tech, text, image }) => (
    <ItemProjects key={id}>
      <WrapCoverProject className="image_cover">
        <CoverProject src={image} />
        <TechSkillsText>{tech}</TechSkillsText>
      </WrapCoverProject>
      <WrapInfo>
        <TitleName>{text}</TitleName>
        <WrapLink>
          <LinkButton href={toSite} type="button" target="_blank">
            <CgBrowser size={20} />
          </LinkButton>
          <LinkButton
            href={toGithub}
            type="button"
            target="_blank"
            alt="Github"
          >
            <BsGithub size={20} />
          </LinkButton>
        </WrapLink>
      </WrapInfo>
    </ItemProjects>
  ));

  return (
    <Container>
      <ListProjects>{elements}</ListProjects>
    </Container>
  );
}
