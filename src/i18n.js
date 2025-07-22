import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import pt from './locales/pt.json'

const messages = {
  en,
  pt,
}

const supportedLangs = Object.keys(messages)

// Load saved language or fallback to browser default
const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language.split('-')[0]
const fallbackLang = 'en'

const activeLang = supportedLangs.includes(savedLang)
  ? savedLang
  : supportedLangs.includes(browserLang)
    ? browserLang
    : fallbackLang

const i18n = createI18n({
  legacy: false,
  locale: activeLang,
  fallbackLocale: fallbackLang,
  messages,
})

export default i18n
