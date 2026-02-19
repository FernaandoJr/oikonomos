'use client';

import i18n, { t } from 'i18next';
import { initReactI18next } from 'react-i18next';

// PT-BR
import commonPtBR from './locales/ptBR/common.json';
// EN-US
import commonEnUS from './locales/enUS/common.json';
// IT-IT
import commonItIT from './locales/itIT/common.json';

const resources = {
  ptBR: {
    common: { ...commonPtBR },
  },
  enUS: {
    common: commonEnUS,
  },
  itIT: {
    common: { ...commonItIT },
  },
};

// Ler idioma do cookie se existir
const getInitialLanguage = (): string => {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';');
    const localeCookie = cookies.find((c) => c.trim().startsWith('NEXT_LOCALE='));
    if (localeCookie) {
      return localeCookie.split('=')[1].trim();
    }
  }
  return 'ptBR';
};

i18n.use(initReactI18next).init({
  resources,
  ns: ['common'],
  lng: getInitialLanguage(),
  defaultNS: 'common',
  nsSeparator: '.',
  appendNamespaceToMissingKey: true,
  parseMissingKeyHandler: (key) => {
    return key;
  },
});

export default i18n;
export { I18nextProvider, useTranslation } from 'react-i18next';
export { t };
