import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <section className="section-y">
      <div className="container-page text-center">
        <h1 className="text-4xl md:text-6xl font-bold">{t('hero.title')}</h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl muted">
          We look for all the beauty possible without giving up protection of nature.
        </p>
        <div className="mt-8">
          <Link to="/contact" className="inline-block rounded-md bg-emerald-700 px-6 py-3 text-white shadow-sm hover:bg-emerald-800">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};
