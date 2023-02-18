import styled from 'styled-components';
import EducationItem from '../EducationItem/EducationItem';
import { useTranslation } from 'react-i18next';

const WrapEducationList = styled.div`
  background-color: ${props => props.theme.colors.darkSecondary};
  border-radius: ${props => props.theme.radii.big};
  padding: 30px;

  position: relative;
  margin-top: 30px;
  @media (min-width: 768px) {
    margin-top: 0;
    max-width: 250px;
  }
`;

const Title = styled.h2`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
  text-transform: uppercase;
  padding-bottom: 20px;
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

export default function EducationList() {
  const { t } = useTranslation();
  return (
    <WrapEducationList>
      <BgTitle />
      <Title>{t('About.title_education')}</Title>
      <EducationItem />
    </WrapEducationList>
  );
}
