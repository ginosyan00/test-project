import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { initializeI18n } from './i18n';
import { devLog } from '../../utils/devLog';

export const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const i18n = initializeI18n();

  useEffect(() => {
    devLog('providers', 'i18n initialized', { lng: i18n.language });
  }, [i18n.language]);

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>{children}</BrowserRouter>
    </I18nextProvider>
  );
};
