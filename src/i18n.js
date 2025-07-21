import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import pt from './locales/pt.json'

const messages = {
  en,
  pt,
}

// Load saved language or fallback to browser default
const savedLang = localStorage.getItem('lang')
const browserLang = navigator.language.split('-')[0]
const fallbackLang = 'en'

const i18n = createI18n({
  legacy: false,
  locale: messages[savedLang || browserLang] ? savedLang || browserLang : fallbackLang,
  fallbackLocale: fallbackLang,
  messages,
})

export default i18n
