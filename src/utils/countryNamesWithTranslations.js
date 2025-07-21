import { countriesListTranslations } from './countriesListTranslations'
import { supportedLocales } from '@/i18n/supported'

export function languageCodeToTranlsationCode(translationDict, languageCode) {
  return translationDict[languageCode] || languageCode
}

const defaultTranslationDict = {
  pt: 'por',
  de: 'deu',
}

export function fetchCountriesNamesWithTranslations(
  countriesData,
  countryCodes,
  languages,
  translationDict = defaultTranslationDict, // maps the language code to the key present in the translation section forthe countriesList
) {
  // const result = countryCodes.map((countryCode) => {
  let result = {}
  for (const countryCode of countryCodes) {
    result[countryCode.toLowerCase()] = fetchCountryNameWithTranslations(
      countriesData,
      countryCode,
      languages,
      translationDict,
    )
  }
  return result
}

// Returns dict with langauge code pointing to an object with { common: {name_in_that_language} }
export function fetchCountryNameWithTranslations(
  countriesData,
  countryCode,
  languages,
  translationDict = defaultTranslationDict, // maps the language code to the key present in the translation section forthe countriesList
) {
  const countryData = countriesData.find(
    (countryData) => countryData.cca2.toLowerCase() == countryCode.toLowerCase(),
  )

  let countryTranslations = {}
  for (const languageCode of languages) {
    let languageTranslationCode = translationDict[languageCode]
    if (languageCode == 'en') {
      countryTranslations[languageCode] = { common: countryData.name.common }
    } else {
      countryTranslations[languageCode] = {
        common: countryData.translations[languageTranslationCode].common,
      }
    }
  }
  return countryTranslations
}
