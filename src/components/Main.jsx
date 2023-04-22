import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();

  return (
    <main className="flex-grow flex justify-center">
      <div className="max-w-7xl">
        {t('helloWorld')}
      </div>
    </main>
  );
};

export default Main;
