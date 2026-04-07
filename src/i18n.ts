import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import authEn from './locales/en/auth.json';
import authAr from './locales/ar/auth.json';

const resources = {
  en: {
    auth: authEn,
  },
  ar: {
    auth: authAr,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    ns: ['auth'], // specify namespaces
    defaultNS: 'auth',

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
