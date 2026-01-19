import { Locale } from 'date-fns';
import { default as i18n } from 'i18next';
export type SupportedLngs = 'lt' | 'en';
export declare const locales: Record<SupportedLngs, Locale>;
export type SupportedLanguage = 'lt' | 'en';
export default i18n;
