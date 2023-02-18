import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const WrapLang = styled.div`
  margin-top: 20px;

  @media (min-width: 1100px) {
    padding: 10px 5px;
    margin-top: 0;
  }
`;
const ButtonLang = styled.button`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${props => props.theme.colors.text};

  background-color: ${props => props.theme.colors.background};
  border: none;
  /* border-radius: ${props => props.theme.radii.big}; */
  padding: 10px 10px;

  :hover {
    background-color: #ffffff28;
  }
  @media (min-width: 1100px) {
    padding: 10px 5px;
  }
`;

export default function LangBtn() {
  const [en, setEn] = useState(true);
  const [ua, setUa] = useState(false);

  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === 'en') {
      setEn(true);
      setUa(false);
    }
    if (i18n.language === 'ua') {
      setUa(true);
      setEn(false);
    }
  }, [i18n.language]);

  const handleClick = language => {
    i18n.changeLanguage(language);
    if (i18n.language === 'en') {
      setEn(true);
    }
    if (i18n.language === 'ua') {
      setUa(true);
    }
  };

  console.log(i18n.language);
  return (
    <WrapLang>
      <ButtonLang
        style={{ color: en === true ? '#16A899' : '#fff' }}
        onClick={() => handleClick('en')}
      >
        EN
      </ButtonLang>
      <ButtonLang
        style={{ color: ua === true ? '#16A899' : '#fff' }}
        onClick={() => handleClick('ua')}
      >
        UA
      </ButtonLang>
    </WrapLang>
  );
}
