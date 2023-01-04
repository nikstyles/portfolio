import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './Navigation.module.css';
import Container from '../Container/Container';
import logo from '../../images/logo.svg';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const WrapNav = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`;

const StyledLink = styled(NavLink)`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};

  color: ${props => props.theme.colors.text};
  &.active {
    color: ${props => props.theme.colors.accent};
  }
`;
const Button = styled.button`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  color: #ffffff8d;
  margin-left: 50px;
  background-color: ${props => props.theme.colors.background};
  border: 1px solid #ffffff8d;
  border-radius: ${props => props.theme.radii.big};
  padding: 10px 20px;
  :hover {
    color: ${props => props.theme.colors.text};
    border: 1px solid ${props => props.theme.colors.text};
  }
`;

const LogoLink = styled(NavLink)`
  cursor: pointer;
  margin-right: 100px;
`;
const Logo = styled.img`
  height: 55px;
  fill: ${props => props.theme.colors.text};
`;

const WrapLink = styled.div`
  display: flex;
  gap: 70px;
  align-items: left;
`;

export default function Navigation({ setBlur }) {
  const [showModal, setshowModal] = useState(false);

  const toggleModal = () => {
    setshowModal(!showModal);
    setBlur(!showModal);
  };

  return (
    <nav className={s.nav}>
      <Container>
        <WrapNav>
          <LogoLink to="/">
            <Logo src={logo} />
          </LogoLink>
          <WrapLink>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/about">About</StyledLink>
          </WrapLink>
          <Button type="button" onClick={toggleModal}>
            Contact
          </Button>
        </WrapNav>
        {showModal && <Modal toggleModal={toggleModal} />}
      </Container>
    </nav>
  );
}
