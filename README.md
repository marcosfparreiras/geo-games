# About this Project

This is a simple project to develop some geography-related games.

# Fetching data

In order to fetch country-related data, one option would be to use the open API https://restcountries.com

Here are some examples on how to call it:

- Get the name, cca2 and cca3 from all the countries:
  - https://restcountries.com/v3.1/all?fields=name,cca2,cca3
- Get all the data from a country by cca2, ccn3, cca3 or cioc country code
  - https://restcountries.com/v3.1/alpha/{code}
  - https://restcountries.com/v3.1/alpha/co
  - https://restcountries.com/v3.1/alpha/col
  - https://restcountries.com/v3.1/alpha/170

The most important fields I believe I would need:

- name, cca3 (code), region, subregion, borders, population, timezones, continents, flags, capitalInfo
- the request for that:
  - https://restcountries.com/v3.1/all?fields=name,cca3,region,subregion,borders,population,timezones,continents,flags,capitalInfo

This is a full response for a given country:

```json
[
  {
    "name": {
      "common": "Brazil",
      "official": "Federative Republic of Brazil",
      "nativeName": {
        "por": {
          "official": "República Federativa do Brasil",
          "common": "Brasil"
        }
      }
    },
    "tld": [".br"],
    "cca2": "BR",
    "ccn3": "076",
    "cioc": "BRA",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "BRL": {
        "symbol": "R$",
        "name": "Brazilian real"
      }
    },
    "idd": {
      "root": "+5",
      "suffixes": ["5"]
    },
    "capital": ["Brasília"],
    "altSpellings": [
      "BR",
      "Brasil",
      "Federative Republic of Brazil",
      "República Federativa do Brasil"
    ],
    "region": "Americas",
    "subregion": "South America",
    "languages": {
      "por": "Portuguese"
    },
    "latlng": [-10, -55],
    "landlocked": false,
    "borders": ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
    "area": 8515767,
    "demonyms": {
      "eng": {
        "f": "Brazilian",
        "m": "Brazilian"
      },
      "fra": {
        "f": "Brésilienne",
        "m": "Brésilien"
      }
    },
    "cca3": "BRA",
    "translations": {
      "ara": {
        "official": "جمهورية البرازيل الاتحادية",
        "common": "البرازيل"
      },
      "bre": {
        "official": "Republik Kevreel Brazil",
        "common": "Brazil"
      },
      "ces": {
        "official": "Brazilská federativní republika",
        "common": "Brazílie"
      },
      "cym": {
        "official": "Gweriniaeth Ffederal Brasil",
        "common": "Brasil"
      },
      "deu": {
        "official": "Föderative Republik Brasilien",
        "common": "Brasilien"
      },
      "est": {
        "official": "Brasiilia Liitvabariik",
        "common": "Brasiilia"
      },
      "fin": {
        "official": "Brasilian liittotasavalta",
        "common": "Brasilia"
      },
      "fra": {
        "official": "République fédérative du Brésil",
        "common": "Brésil"
      },
      "hrv": {
        "official": "Savezne Republike Brazil",
        "common": "Brazil"
      },
      "hun": {
        "official": "Brazil Szövetségi Köztársaság",
        "common": "Brazília"
      },
      "ind": {
        "official": "Republik Federatif Brasil",
        "common": "Brasil"
      },
      "ita": {
        "official": "Repubblica federativa del Brasile",
        "common": "Brasile"
      },
      "jpn": {
        "official": "ブラジル連邦共和国",
        "common": "ブラジル"
      },
      "kor": {
        "official": "브라질 연방 공화국",
        "common": "브라질"
      },
      "nld": {
        "official": "Federale Republiek Brazilië",
        "common": "Brazilië"
      },
      "per": {
        "official": "جمهوری فدراتیو برزیل",
        "common": "برزیل"
      },
      "pol": {
        "official": "Federacyjna Republika Brazylii",
        "common": "Brazylia"
      },
      "por": {
        "official": "República Federativa do Brasil",
        "common": "Brasil"
      },
      "rus": {
        "official": "Федеративная Республика Бразилия",
        "common": "Бразилия"
      },
      "slk": {
        "official": "Brazílska federatívna republika",
        "common": "Brazília"
      },
      "spa": {
        "official": "República Federativa del Brasil",
        "common": "Brasil"
      },
      "srp": {
        "official": "Савезна Република Бразил",
        "common": "Бразил"
      },
      "swe": {
        "official": "Förbundsrepubliken Brasilien",
        "common": "Brasilien"
      },
      "tur": {
        "official": "Brezilya Federal Cumhuriyeti",
        "common": "Brezilya"
      },
      "urd": {
        "official": "وفاقی جمہوریہ برازیل",
        "common": "برازیل"
      },
      "zho": {
        "official": "巴西联邦共和国",
        "common": "巴西"
      }
    },
    "flag": "🇧🇷",
    "maps": {
      "googleMaps": "https://goo.gl/maps/waCKk21HeeqFzkNC9",
      "openStreetMaps": "https://www.openstreetmap.org/relation/59470"
    },
    "population": 212559409,
    "gini": {
      "2019": 53.4
    },
    "fifa": "BRA",
    "car": {
      "signs": ["BR"],
      "side": "right"
    },
    "timezones": ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
    "continents": ["South America"],
    "flags": {
      "png": "https://flagcdn.com/w320/br.png",
      "svg": "https://flagcdn.com/br.svg",
      "alt": "The flag of Brazil has a green field with a large yellow rhombus in the center. Within the rhombus is a dark blue globe with twenty-seven small five-pointed white stars depicting a starry sky and a thin white convex horizontal band inscribed with the national motto 'Ordem e Progresso' across its center."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/br.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/br.svg"
    },
    "startOfWeek": "sunday",
    "capitalInfo": {
      "latlng": [-15.79, -47.88]
    },
    "postalCode": {
      "format": "#####-###",
      "regex": "^(\\d{8})$"
    }
  }
]
```

# [Scaffolded with vue] geo-games

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
