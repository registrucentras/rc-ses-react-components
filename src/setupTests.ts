import '@testing-library/jest-dom/vitest'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import commonEn from '@/i18n/namespaces/common/en.json'
import commonLt from '@/i18n/namespaces/common/lt.json'
import inputEn from '@/i18n/namespaces/input/en.json'
import inputLt from '@/i18n/namespaces/input/lt.json'

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    fallbackLng: 'lt',
    interpolation: { escapeValue: false },
    lng: 'lt',
    resources: {
      lt: { common: commonLt, input: inputLt },
      en: { common: commonEn, input: inputEn },
    },
  })
}
