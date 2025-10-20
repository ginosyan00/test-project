import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation('common');
  const location = useLocation();

  const changeLang = (lng: 'en' | 'hy' | 'ru') => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lang', lng);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#faf7f2]/90 backdrop-blur supports-[backdrop-filter]:bg-[#faf7f2]/80 border-b border-black/5">
      <div className="container-page py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">Woolway</div>
        <nav className="flex gap-6 text-sm">
          <Link to="/" className={linkCls(location.pathname === '/')}>{t('nav.home')}</Link>
          <Link to="/about" className={linkCls(location.pathname === '/about')}>{t('nav.about')}</Link>
          <Link to="/message" className={linkCls(location.pathname === '/message')}>{t('nav.message')}</Link>
          <Link to="/contact" className={linkCls(location.pathname === '/contact')}>{t('nav.contact')}</Link>
        </nav>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <button className={langBtnCls(i18n.language === 'en')} onClick={() => changeLang('en')}>EN</button>
          <span className="text-gray-400">/</span>
          <button className={langBtnCls(i18n.language === 'hy')} onClick={() => changeLang('hy')}>HY</button>
          <span className="text-gray-400">/</span>
          <button className={langBtnCls(i18n.language === 'ru')} onClick={() => changeLang('ru')}>RU</button>
        </div>
      </div>
    </header>
  );
};

function linkCls(active: boolean) {
  return `hover:text-gray-800 ${active ? 'text-gray-900 font-medium' : 'text-gray-700'}`;
}

function langBtnCls(active: boolean) {
  return `hover:text-gray-900 ${active ? 'text-gray-900 font-semibold' : 'text-gray-600'}`;
}
