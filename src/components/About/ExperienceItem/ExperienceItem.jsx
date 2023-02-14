// import itemsExperience from './itemsExperience';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import dniprom from '../../../images/logo_dniprom.svg';
import polikam from '../../../images/logo_polikam.png';
import { nanoid } from 'nanoid';

const ItemsExperience = styled.div`
  padding-top: 30px;
  gap: 60px;
  border-bottom: 2px solid ${p => p.theme.colors.background};
  padding-bottom: 30px;
  :last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Wrapinfo = styled.div``;

const LogoCompany = styled.img`
  width: 130px;
`;

const SecondaryTitle = styled.h3`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: ${p => p.theme.lineHeights.heading};
  padding-top: 15px;
  padding-bottom: 10px;
  min-width: 145px;
  letter-spacing: 0.04em;
`;
const TimePeriod = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  letter-spacing: 0.04em;
`;
const Text = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.lite};
  line-height: ${p => p.theme.lineHeights.body};
  letter-spacing: 0.04em;
  padding-top: 25px;
  @media (min-width: 768px) {
    padding-top: 0;
  }
`;

export default function ExperienceItem() {
  const { t } = useTranslation();
  // const elements = itemsExperience.map(
  //   ({ id, logoCompany, title, timePeriod, text }) => (
  //     <ItemsExperience key={id}>
  //       <Wrapinfo>
  //         <LogoCompany src={logoCompany} />
  //         <SecondaryTitle>{title}</SecondaryTitle>
  //         <TimePeriod>{timePeriod}</TimePeriod>
  //       </Wrapinfo>
  //       <Text>{text}</Text>
  //     </ItemsExperience>
  //   )
  // );

  return (
    <>
      <ItemsExperience key={nanoid()}>
        <Wrapinfo>
          <LogoCompany src={dniprom} />
          <SecondaryTitle>
            {t('About.work_experience.position1')}
          </SecondaryTitle>
          <TimePeriod>01.2019 - 01.2022</TimePeriod>
        </Wrapinfo>
        <Text>{t('About.work_experience.text1')}</Text>
      </ItemsExperience>
      <ItemsExperience key={nanoid()}>
        <Wrapinfo>
          <LogoCompany src={polikam} />
          <SecondaryTitle>
            {t('About.work_experience.position2')}
          </SecondaryTitle>
          <TimePeriod>03.2018 - 08.2018</TimePeriod>
        </Wrapinfo>
        <Text>{t('About.work_experience.text2')}</Text>
      </ItemsExperience>
    </>
  );
}
