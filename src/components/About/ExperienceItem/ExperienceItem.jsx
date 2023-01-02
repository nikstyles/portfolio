import itemsExperience from './itemsExperience';
import styled from 'styled-components';

const ItemsExperience = styled.div`
  padding-top: 30px;
  display: flex;
  gap: 60px;
  border-bottom: 2px solid ${p => p.theme.colors.background};
  padding-bottom: 30px;
  :last-child {
    border-bottom: none;
    padding-bottom: 0;
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
`;

export default function ExperienceItem() {
  const elements = itemsExperience.map(
    ({ id, logoCompany, title, timePeriod, text }) => (
      <ItemsExperience key={id}>
        <Wrapinfo>
          <LogoCompany src={logoCompany} />
          <SecondaryTitle>{title}</SecondaryTitle>
          <TimePeriod>{timePeriod}</TimePeriod>
        </Wrapinfo>
        <Text>{text}</Text>
      </ItemsExperience>
    )
  );

  return <>{elements}</>;
}
