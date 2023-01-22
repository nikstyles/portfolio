import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import s from './Navigation.module.css';
import Container from '../Container/Container';
import logo from '../../images/logo.svg';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useEffect, useCallback } from 'react';
import MobileBtn from '../MobileBtn/MobileBtn';

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

const WrapWrapLinkNav = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    position: fixed;
    right: 0;
    left: -100%;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.background};
    overflow: auto;

    z-index: 10;
    transition: left 1s;
    padding-top: 150px;
    &.active {
      left: 0;
      z-index: 10;
    }
  }
`;

// const WrapLinkNav = styled.div`
//   /* display: flex;
//   align-items: center;
//   justify-items: center; */
//   @media (max-width: 1100px) {
//     position: fixed;
//     top: 50px;
//   }
// `;

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
  @media (max-width: 1100px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const LogoLink = styled(NavLink)`
  cursor: pointer;
  margin-right: 100px;
`;
const Logo = styled.img`
  height: 45px;
  fill: ${props => props.theme.colors.text};

  @media (min-width: 1100px) {
    height: 55px;
  }
`;

const WrapLink = styled.div`
  display: flex;
  gap: 70px;
  align-items: left;
  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export default function Navigation({ setBlur }) {
  const [showModal, setshowModal] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleModal = () => {
    setshowModal(!showModal);
    setBlur(!showModal);
  };

  const toggleModalAndOpenMenu = () => {
    setshowModal(!showModal);
    setBlur(!showModal);
    setOpenMenu(!openMenu);
  };

  const keyPress = useCallback(
    e => {
      if (e.code === 'Escape') {
        setshowModal(!showModal);
        setBlur(!showModal);
        // console.log('I pressed');
      }
    },
    [setBlur, showModal]
  );

  useEffect(() => {
    window.addEventListener('keydown', keyPress);
    return () => window.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  const [matches, setMatches] = useState(
    window.matchMedia('(min-width: 1100px)').matches
  );

  useEffect(() => {
    window
      .matchMedia('(min-width: 1100px)')
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  useEffect(() => {
    openMenu
      ? (document.body.style.overflow = 'hidden')
      : console.log('openMenu: false');
  }, [openMenu]);

  return (
    <nav className={s.nav}>
      <Container>
        <WrapNav>
          <LogoLink to="/">
            <Logo src={logo} />
          </LogoLink>

          <WrapWrapLinkNav className={openMenu ? 'active' : ''}>
            {/* <WrapLinkNav> */}
            <WrapLink>
              <StyledLink to="/" onClick={() => setOpenMenu(!openMenu)} end>
                Home
              </StyledLink>
              <StyledLink to="/projects" onClick={() => setOpenMenu(!openMenu)}>
                Projects
              </StyledLink>
              <StyledLink to="/about" onClick={() => setOpenMenu(!openMenu)}>
                About
              </StyledLink>
            </WrapLink>
            <Button type="button" onClick={toggleModalAndOpenMenu}>
              Contact
            </Button>
            {/* </WrapLinkNav> */}
          </WrapWrapLinkNav>
        </WrapNav>
        {!matches && (
          <MobileBtn openBtn={setOpenMenu} openMenuBoolin={openMenu} />
        )}
        {showModal && <Modal toggleModal={toggleModal} />}
      </Container>
    </nav>
  );
}
