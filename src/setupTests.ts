import '@testing-library/jest-dom/vitest'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    fallbackLng: 'lt',
    interpolation: { escapeValue: false },
    lng: 'lt',
    resources: {
      lt: { translation: {} },
    },
  })
}
