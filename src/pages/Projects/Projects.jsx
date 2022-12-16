import Container from '../../components/Container/Container';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import items from './items';
import { BsGithub } from 'react-icons/bs';
import { CgBrowser } from 'react-icons/cg';

const ListProjects = styled.ul`
  margin-top: 65px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
const ItemProjects = styled.li`
  height: 350px;
  border-radius: ${props => props.theme.radii.big};

  background-color: rgba(255, 255, 255, 0.07);
`;
const WrapCoverProject = styled.div`
  border-radius: ${props => props.theme.radii.big};
  background: linear-gradient(transparent, #663ee1);
  /* position: relative; */
  z-index: -10;
  width: 380px;
  height: 276px;
`;
const CoverProject = styled.img`
  border-radius: ${props => props.theme.radii.big};
  border: solid 1px white;
  :hover {
    opacity: 20%;
  }
`;

const WrapLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const LinkButton = styled.a`
  justify-content: center;
  padding: 10px 15px;
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

export default function Projects() {
  const elements = items.map(({ id, toSite, toGithub, text, image }) => (
    <ItemProjects key={id}>
      <WrapCoverProject>
        <CoverProject src={image} />
      </WrapCoverProject>
      <WrapInfo>
        <TitleName>{text}</TitleName>
        <WrapLink>
          <LinkButton href={toSite} type="button" target="_blank">
            <CgBrowser />
          </LinkButton>
          <LinkButton href={toGithub} type="button" target="_blank">
            <BsGithub />
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
