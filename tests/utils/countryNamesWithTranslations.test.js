import { describe, it, expect } from 'vitest'

import {
  fetchCountriesNamesWithTranslations,
  fetchCountryNameWithTranslations,
  languageCodeToTranlsationCode,
} from '@/utils/countryNamesWithTranslations'

describe('languageCodeToTranlsationCode', () => {
  const translationDict = { pt: 'por', fr: 'fra' }

  describe('when key is defined', () => {
    const key = 'pt'

    it('returns the translated code', () => {
      const result = languageCodeToTranlsationCode(translationDict, key)
      expect(result).toBe('por')
    })
  })

  describe('when key is not defined', () => {
    const key = 'de'

    it('returns the code itself', () => {
      const result = languageCodeToTranlsationCode(translationDict, key)
      expect(result).toBe('de')
    })
  })
})

const countriesData = [
  {
    name: {
      common: 'Moldova',
      official: 'Republic of Moldova',
      nativeName: {
        ron: {
          official: 'Republica Moldova',
          common: 'Moldova',
        },
      },
    },
    cca2: 'MD',
    translations: {
      deu: {
        official: 'Republik Moldau',
        common: 'Moldawien',
      },
      fra: {
        official: 'République de Moldavie',
        common: 'Moldavie',
      },
      por: {
        official: 'República da Moldávia',
        common: 'Moldávia',
      },
    },
  },
  {
    name: {
      common: 'Comoros',
      official: 'Union of the Comoros',
      nativeName: {
        ara: {
          official: 'الاتحاد القمري',
          common: 'القمر‎',
        },
        fra: {
          official: 'Union des Comores',
          common: 'Comores',
        },
        zdj: {
          official: 'Udzima wa Komori',
          common: 'Komori',
        },
      },
    },
    cca2: 'KM',
    translations: {
      deu: {
        official: 'Union der Komoren',
        common: 'Komoren',
      },
      fra: {
        official: 'Union des Comores',
        common: 'Comores',
      },
      por: {
        official: 'União das Comores',
        common: 'Comores',
      },
    },
  },
  {
    name: {
      common: 'Malaysia',
      official: 'Malaysia',
      nativeName: {
        eng: {
          official: 'Malaysia',
          common: 'Malaysia',
        },
        msa: {
          official: 'مليسيا',
          common: 'مليسيا',
        },
      },
    },
    cca2: 'MY',
    translations: {
      deu: {
        official: 'Malaysia',
        common: 'Malaysia',
      },
      fra: {
        official: 'Fédération de Malaisie',
        common: 'Malaisie',
      },
      por: {
        official: 'Malásia',
        common: 'Malásia',
      },
    },
  },
  {
    name: {
      common: 'Algeria',
      official: "People's Democratic Republic of Algeria",
      nativeName: {
        ara: {
          official: 'الجمهورية الديمقراطية الشعبية الجزائرية',
          common: 'الجزائر',
        },
      },
    },
    cca2: 'DZ',
    translations: {
      deu: {
        official: 'Demokratische Volksrepublik Algerien',
        common: 'Algerien',
      },
      fra: {
        official: "République démocratique et populaire d'Algérie",
        common: 'Algérie',
      },
      por: {
        official: 'República Argelina Democrática e Popular',
        common: 'Argélia',
      },
    },
  },
]

describe('fetchCountriesNamesWithTranslations', () => {
  it('returns a list with objects containing the translation for all the selected languages', () => {
    const translationDict = { pt: 'por' }
    const languages = ['en', 'pt']
    const countryCodes = ['MD', 'km', 'MY']
    const expectedResult = {
      md: {
        en: { common: 'Moldova' },
        pt: { common: 'Moldávia' },
      },
      km: {
        en: { common: 'Comoros' },
        pt: { common: 'Comores' },
      },
      my: {
        en: { common: 'Malaysia' },
        pt: { common: 'Malásia' },
      },
    }

    const result = fetchCountriesNamesWithTranslations(
      countriesData,
      countryCodes,
      languages,
      translationDict,
    )
    expect(result).toStrictEqual(expectedResult)
  })
})

describe('fetchCountryNameWithTranslations', () => {
  it('returns a dictionary with translation for all the selected languages', () => {
    const translationDict = { pt: 'por' }
    const languages = ['en', 'pt']
    const countryCode = 'MD'
    const expectedResult = {
      en: { common: 'Moldova' },
      pt: { common: 'Moldávia' },
    }

    const result = fetchCountryNameWithTranslations(
      countriesData,
      countryCode,
      languages,
      translationDict,
    )
    expect(result).toStrictEqual(expectedResult)
  })
})
