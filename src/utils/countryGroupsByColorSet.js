import { CountryGroup, CountryGroupCollection } from './countryGroups'

const categoryName = 'Color Set'
const coutryGroupsByColorSet = new CountryGroupCollection(categoryName)

//------------------------------------------------
//------------- Blue/Red/White (Tricolor Influence – French, Dutch, Anglo)
//------------------------------------------------
const blueRedWhiteName = 'Blue-Red-White'
const blueRedWhiteSlug = 'blue-red-white'
const blueRedWhiteCountries = [
  'FR', // "France"
  'CZ', // "Czechia"
  'LU', // "Luxemburg"
  'NL', // "Netherlands"
  'RS', // "Serbia"
  'SI', // "Slovenia"
  'RU', // "Russia"
  'FR', // France
  'NL', // Netherlands

  'SK', // Slovakia
  'HR', // Croatia
  'CL', // Chile
  'TH', // Thailand
]
// const trickyColoursWhiteBlueRedSubGameSlug = 'trickyColoursWhiteBlueRed'
const blueRedWhiteShareMessageSuffix = '🇫🇷🇷🇸🇨🇿🇷🇺'
const blueRedWhiteCountryGroup = new CountryGroup(
  blueRedWhiteName,
  blueRedWhiteSlug,
  blueRedWhiteCountries,
  blueRedWhiteShareMessageSuffix,
)

coutryGroupsByColorSet.add(blueRedWhiteCountryGroup)

//------------------------------------------------
//------------- Black/Green/Red/White (Pan-Arab or Islamic-influenced)
//------------------------------------------------
const blackGreenRedWhiteName = 'Black-Green-Red-White'
const blackGreenRedWhiteSlug = 'black-green-red-white'
const blackGreenRedWhiteCountries = [
  'PS', //Palestine
  'JO', //Jordan
  'SD', //Sudan
  'KW', //Kuwait
  'AE', //United Arab Emirates
  'IQ', //Iraq
  'SY', //Syria
  'YE', //Yemen
  'EH', //Western Sahara
  'LY', //Libya (post-2011)
  'DZ', //Algeria
  'OM', //Oman
]
// const trickyColoursWhiteBlueRedSubGameSlug = 'trickyColoursWhiteBlueRed'
const blackGreenRedWhiteShareMessageSuffix = '🇮🇶🇯🇴🇵🇸🇩🇿'
const blackGreenRedWhiteCountryGroup = new CountryGroup(
  blackGreenRedWhiteName,
  blackGreenRedWhiteSlug,
  blackGreenRedWhiteCountries,
  blackGreenRedWhiteShareMessageSuffix,
)

coutryGroupsByColorSet.add(blackGreenRedWhiteCountryGroup)

//------------------------------------------------
//------------- Black/Red/Yellow (Pan-Germanic Influence)
//------------------------------------------------
const blackRedYellowName = 'Black-Red-Yellow'
const blackRedYellowSlug = 'black-red-yellow'
const blackRedYellowCountries = [
  'DE', // Germany
  'BE', // Belgium
  'AO', // Angola
  'MZ', // Mozambique
  'UG', // Uganda
  'ES', // Spain
  'SS', // South Sudan
  'GH', // Ghana
  'ET', // Ethiopia
  'VE', // Venezuela
  'CO', // Colombia
  'EC', // Ecuador
]
// const trickyColoursWhiteBlueRedSubGameSlug = 'trickyColoursWhiteBlueRed'
const blackRedYellowShareMessageSuffix = '🇮🇶🇯🇴🇵🇸🇩🇿' // TODO: Update this
const blackRedYellowCountryGroup = new CountryGroup(
  blackRedYellowName,
  blackRedYellowSlug,
  blackRedYellowCountries,
  blackRedYellowShareMessageSuffix,
)

// TODO: get better set of flags to fit this grup and then add it
// coutryGroupsByColorSet.add(blackRedYellowCountryGroup)

//------------------------------------------------
//------------- Green/Red/White (Pan-Italian / Latin Influence)
//------------------------------------------------
const greenRedWhiteName = 'Green-Red-White'
const greenRedWhiteSlug = 'green-red-white'
const greenRedWhiteCountries = [
  'IT', // Italy
  'MX', // Mexico
  'IR', // Iran
  'HU', // Hungary
  'BG', // Bulgaria
  'LB', // Lebanon
  'DZ', // Algeria
  'MG', // Madagascar
  'OM', // Oman
  'MV', // Maldives
  'BY', // Belarus
]
// const trickyColoursWhiteBlueRedSubGameSlug = 'trickyColoursWhiteBlueRed'
const greenRedWhiteShareMessageSuffix = '🇮🇶🇯🇴🇵🇸🇩🇿' // TODO: Update this
const greenRedWhiteCountryGroup = new CountryGroup(
  greenRedWhiteName,
  greenRedWhiteSlug,
  greenRedWhiteCountries,
  greenRedWhiteShareMessageSuffix,
)

coutryGroupsByColorSet.add(greenRedWhiteCountryGroup)

//------------------------------------------------
//------------- Blue/Yellow (Nordic Influence)
//------------------------------------------------
const blueYellowName = 'Blue-Yellow'
const blueYellowSlug = 'blue-yellow'
const blueYellowCountries = [
  'SE', // Sweden
  'UA', // Ukraine
  'KZ', // Kazakhstan
  'PW', // Palau
  'BB', // Barbados
  'BA', // Bosnia & Herzegovina
  'AW', // Aruba
  'RW', // Rwanda
  'LC', // Saint Lucia
]
// const trickyColoursWhiteBlueRedSubGameSlug = 'trickyColoursWhiteBlueRed'
const blueYellowShareMessageSuffix = '🇮🇶🇯🇴🇵🇸🇩🇿' // TODO: Update this
const blueYellowCountryGroup = new CountryGroup(
  blueYellowName,
  blueYellowSlug,
  blueYellowCountries,
  blueYellowShareMessageSuffix,
)

coutryGroupsByColorSet.add(blueYellowCountryGroup)

// --- Export countryGroupCollection
export default coutryGroupsByColorSet

// 'KM', //Comoros has many colours

// UK-related:
// 'GB', // United Kingdom
// 'US', // United States
// 'AU', // Australia
// 'NZ', // New Zealand
