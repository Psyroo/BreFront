import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { i18n } = useTranslation();

  return (
    <header className='w-full h-14 flex justify-between px-4 py-2 shadow-sm'>
      {i18n.language === 'fr' ?
        <button onClick={() => i18n.changeLanguage('en')}>en</button>
        :
        <button onClick={() => i18n.changeLanguage('fr')}>fr</button>
      }
    </header>
  );
};

export default Footer;
