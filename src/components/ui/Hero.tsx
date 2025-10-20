import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const { t } = useTranslation('common');
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">{t('hero.title')}</h1>
        <div className="mt-6">
          <Link to="/contact" className="inline-block rounded-md bg-emerald-600 px-5 py-2.5 text-white hover:bg-emerald-700">Contact us</Link>
        </div>
      </div>
    </section>
  );
};
