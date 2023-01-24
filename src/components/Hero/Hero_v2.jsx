// import s from './Hero.module.css';
import styled from 'styled-components';
import { GiHand } from 'react-icons/gi';
import mykyta from '../../images/20190930_172901.png';
import lineOne from '../../images/line_big.svg';
import lineSecond from '../../images/line_small.svg';
import { useEffect } from 'react';
// import {
//   MouseParallaxChild,
//   MouseParallaxContainer,
// } from 'react-parallax-mouse';

const HeroBanner = styled.div`
  box-sizing: border-box;

  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.big};
  position: relative;
  margin-top: 250px;
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    padding: 45px 0;
    margin-top: 50px;
    height: 365px;
    margin-top: 80px;
  }
  @media (min-width: 1100px) {
    padding: 80px 0;
    margin-top: 80px;
    height: 468px;
  }
  /* @media ${p => p.theme.media.desktop} {
  } ; */
`;

const WrapText = styled.div`
  color: ${p => p.theme.colors.text};
  padding-left: 70px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1100px) {
    padding-left: 130px;
  }
`;

const BgWelcomText = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${p => p.theme.radii.big};
  border-bottom-left-radius: -20px;

  width: 85px;
  height: 120px;
  margin-top: -200px;
  margin-left: -70px;
  position: absolute;
  z-index: -2;
  @media (min-width: 768px) {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const WelcomText = styled.h3`
  font-size: ${p => p.theme.fontSizes.ll};
  font-weight: ${p => p.theme.fontWeights.lite};
  color: ${p => p.theme.colors.yellow};
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  border-top-right-radius: ${p => p.theme.radii.big};
  border-bottom-right-radius: ${p => p.theme.radii.big};
  padding: 15px 30px 15px 70px;
  margin-left: -117px;
  margin-top: -195px;
  @media (min-width: 768px) {
    display: inline-block;

    margin-left: -70px;
    margin-top: 0;
    background: #00000026;

    font-size: ${p => p.theme.fontSizes.xl};
  }
  @media (min-width: 1100px) {
    margin-left: -130px;
    padding: 15px 30px 15px 130px;
  }
`;

const HeroText = styled.h2`
  max-width: 500px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 32px;
  line-height: ${p => p.theme.lineHeights.heading};
  text-align: end;
  margin-top: -200px;

  @media (min-width: 768px) {
    font-size: 40px;
    text-align: start;

    padding-top: 40px;
    margin-top: 0;
  }
  @media (min-width: 1100px) {
    max-width: 350px;

    font-size: ${p => p.theme.fontSizes.xl};
  }
`;
const NameText = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
`;

const Photo = styled.img`
  position: absolute;
  bottom: 0;
  right: 20vw;
  z-index: 2;
  max-height: 240px;

  @media (min-width: 768px) {
    right: 90px;
    max-height: 400px;
  }
  @media (min-width: 1100px) {
    max-height: 540px;
    right: 170px;
  }
  /* @media (min-width: 1100px) {
    max-height: 440px;
  } */

  /* @media (min-width: 1200px) {
    max-height: 540px;
  } */
`;
const LineOne = styled.img`
  position: absolute;
  bottom: 25px;
  right: 40px;
  z-index: 3;
  width: 150px;
  @media (min-width: 768px) {
    width: 240px;
  }

  @media (min-width: 1100px) {
    bottom: 30px;
    right: 70px;
    width: 317px;
  }
`;
const LineSecond = styled.img`
  position: absolute;
  bottom: 60px;
  right: 45vw;
  z-index: 1;
  width: 130px;
  @media (min-width: 440px) {
    right: 35vw;
  }
  @media (min-width: 768px) {
    width: 200px;
    bottom: 110px;
    right: 230px;
  }

  @media (min-width: 1100px) {
    width: 258px;
    bottom: 160px;
    right: 380px;
  }
`;

const Hero = () => {
  useEffect(() => {
    document.addEventListener('mousemove', e => {
      document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const setX = (window.innerWidth - e.pageX * speed) / 400;
        const setY = (window.innerHeight - e.pageY * speed) / 300;
        // console.log(setX, setY);
        layer.style.transform = `translateX(${setX}px) translateY(${setY}px)`;
      });
    });
  }, []);

  return (
    <>
      <HeroBanner>
        <WrapText>
          <BgWelcomText />
          <WelcomText>
            Hi <GiHand size={40} color={'yellow'} />
          </WelcomText>
          <HeroText>
            <NameText>I'm Nikita,</NameText>
            <br /> front-end
            <br /> development
          </HeroText>
        </WrapText>
        <Photo src={mykyta} alt="x" />
        <LineOne src={lineOne} alt="x" data-speed={5} className="layer" />
        <LineSecond
          src={lineSecond}
          alt="x"
          data-speed={-7}
          className="layer"
        />
      </HeroBanner>
    </>
  );
};

export default Hero;
