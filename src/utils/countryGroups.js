// Class to organize the attributes that a CountryGroup will have
class CountryGroup {
  constructor(groupName, groupSlug, countryCodes, shareMessageSuffix = '') {
    this.groupName = groupName
    this.groupSlug = groupSlug
    this.countryCodes = countryCodes
    this.shareMessageSuffix = shareMessageSuffix
  }
}

// Class to organize the collection of CountryGroups
class CountryGroupCollection {
  constructor() {
    this.collection = {}
  }

  add(groupSlug, countryGroup) {
    this.collection[groupSlug] = countryGroup
  }

  get(groupSlug) {
    return this.collection[groupSlug]
  }

  keys() {
    return Object.keys(this.collection)
  }
}

const countryGroupCollection = new CountryGroupCollection()

//------------------------------------------------
//------------- Balkans
//------------------------------------------------
const balkansName = 'Balkans'
const balkansSlug = 'balkans'
const balkansCountries = [
  'AL', //"Albania"
  'BA', //"Bosnia and Herzegovina"
  'BG', //"Bulgaria"
  'HR', //"Croatia"
  'GR', //"Greece"
  'XK', //"Kosovo"
  'ME', //"Montenegro"
  'MK', //"North Macedonia"
  'RO', //"Romania"
  'RS', //"Serbia"
  'SI', //"Slovenia"
]
const balkansShareMessageSuffix = '🇷🇸🇧🇦🇭🇷🇦🇱'
const balkansCountryGrop = new CountryGroup(
  balkansName,
  balkansSlug,
  balkansCountries,
  balkansShareMessageSuffix,
)
countryGroupCollection.add(balkansSlug, balkansCountryGrop)

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

countryGroupCollection.add(blueRedWhiteSlug, blueRedWhiteCountryGroup)

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

countryGroupCollection.add(blackGreenRedWhiteSlug, blackGreenRedWhiteCountryGroup)

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

countryGroupCollection.add(blackRedYellowSlug, blackRedYellowCountryGroup)

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

countryGroupCollection.add(greenRedWhiteSlug, greenRedWhiteCountryGroup)

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

countryGroupCollection.add(blueYellowSlug, blueYellowCountryGroup)

// --- Export countryGroupCollection
export { countryGroupCollection }

// 'KM', //Comoros has many colours

// UK-related:
// 'GB', // United Kingdom
// 'US', // United States
// 'AU', // Australia
// 'NZ', // New Zealand
