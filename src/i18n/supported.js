// src/i18n/supported.js
export const supportedLocales = {
  en: { label: 'English', flag: '🇬🇧' },
  pt: { label: 'Português', flag: '🇧🇷' },
  // fr: { label: 'Français', flag: '🇫🇷' },
  // de: { label: 'Deutsch', flag: '🇩🇪' },
  // es: { label: 'Español', flag: '🇪🇸' },
}

export const supportedLanguagesList = Object.keys(supportedLocales)

export const defaultLocale = 'en'

export function isValidLocale(locale) {
  return Object.keys(supportedLocales).includes(locale)
}
