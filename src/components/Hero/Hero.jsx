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
  margin-top: 70px;
  padding: 80px 0;
  @media ${p => p.theme.media.desktop} {
    width: 100%;
    height: 468px;
  } ;
`;

const WrapText = styled.div`
  color: ${p => p.theme.colors.text};
  padding-left: 130px;
`;
const WelcomText = styled.h3`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.lite};
  color: ${p => p.theme.colors.yellow};
  background: #00000026;
  display: inline-block;
  max-width: 350px;
  border-top-right-radius: ${p => p.theme.radii.big};
  border-bottom-right-radius: ${p => p.theme.radii.big};
  padding: 15px 30px 15px 130px;
  margin-left: -130px;
`;

const HeroText = styled.h2`
  max-width: 350px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.heading};
  padding-top: 40px;
`;
const NameText = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
`;

const Photo = styled.img`
  max-height: 540px;
  position: absolute;
  bottom: 0;
  right: 170px;
  z-index: 2;
`;
const LineOne = styled.img`
  position: absolute;
  bottom: 30px;
  right: 70px;
  z-index: 3;
`;
const LineSecond = styled.img`
  position: absolute;
  bottom: 160px;
  right: 380px;
  z-index: 1;
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
          <WelcomText>
            Hi <GiHand size={40} color={'yellow'} />
          </WelcomText>
          <HeroText>
            <NameText>I'm Nikita,</NameText> front-end development
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
