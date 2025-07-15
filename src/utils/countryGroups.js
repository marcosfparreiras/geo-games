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
//------------- Blue/Red/White
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

export { countryGroupCollection }
