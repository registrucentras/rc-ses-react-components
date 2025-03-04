import { Locale } from 'date-fns'
import { enUS, lt as ltLT } from 'date-fns/locale'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import CookieStorage from '@/components/shared/storage/CookieStorage'
import env from '@/env'

import commonEn from './namespaces/common/en.json'
import commonLt from './namespaces/common/lt.json'
import inputEn from './namespaces/input/en.json'
import inputLt from './namespaces/input/lt.json'

export type SupportedLngs = 'lt' | 'en'

export const locales: Record<SupportedLngs, Locale> = { en: enUS, lt: ltLT }

const storage = new CookieStorage()

export type SupportedLanguage = 'lt' | 'en'

i18n.use(initReactI18next).init({
  fallbackLng: 'lt',
  interpolation: {
    escapeValue: false,
  },
  lng: storage.getItem(env.ENV_LANGUAGE_COOKIE_NAME) ?? env.ENV_FRONTEND_DEFAULT_LANG,
  react: {
    transKeepBasicHtmlNodesFor: ['br', 'b', 'strong', 'i', 'p', 'a'],
  },
  resources: {
    lt: {
      common: commonLt,
      input: inputLt,
    },
    en: {
      common: commonEn,
      input: inputEn,
    },
  },
  supportedLngs: ['lt', 'en'],
})

export default i18n
