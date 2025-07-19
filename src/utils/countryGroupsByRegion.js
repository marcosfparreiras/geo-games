import { CountryGroup, CountryGroupCollection } from './countryGroups'
import { countriesListCca2 } from './countriesListCca2'

const categoryName = 'Region'
const coutryGroupsByRegion = new CountryGroupCollection(categoryName)

let name
let slug
let countries
let shareMessageSuffix
let countryGrop

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
coutryGroupsByRegion.add(balkansCountryGrop)

//------------------------------------------------
//------------- South America
//------------------------------------------------
name = 'South America'
slug = 'south-america'
countries = [
  'AR', // - Argentina',
  'BO', // - Bolivia',
  'BR', // - Brazil',
  'CL', // - Chile',
  'CO', // - Colombia',
  'EC', // - Ecuador',
  'FK', // - Falkland Islands',
  'GF', // - French Guiana',
  'GY', // - Guyana',
  'PE', // - Peru',
  'PY', // - Paraguay',
  'SR', // - Suriname',
  'UY', // - Uruguay',
  'VE', // - Venezuela'
]
shareMessageSuffix = '🇷🇸🇧🇦🇭🇷🇦🇱' // TODO: get real examples
countryGrop = new CountryGroup(name, slug, countries, shareMessageSuffix)
coutryGroupsByRegion.add(countryGrop)

//------------------------------------------------
//------------- South-Eastern Asia
//------------------------------------------------
name = 'South-Eastern Asia'
slug = 'south-eastern-asia'
countries = countriesListCca2
  .filter((country) => country.subregion == 'South-Eastern Asia')
  .map((country) => country.cca2)
  .sort()
shareMessageSuffix = '🇷🇸🇧🇦🇭🇷🇦🇱' // TODO: get real examples
countryGrop = new CountryGroup(name, slug, countries, shareMessageSuffix)
coutryGroupsByRegion.add(countryGrop)

//------------------------------------------------
//------------- Western Europe
//------------------------------------------------
name = 'Western Europe'
slug = 'western-europe'
countries = countriesListCca2
  .filter((country) => country.subregion == 'Western Europe')
  .map((country) => country.cca2)
  .sort()
countryGrop = new CountryGroup(name, slug, countries)
coutryGroupsByRegion.add(countryGrop)

//------------------------------------------------
//------------- Central Europe
//------------------------------------------------
name = 'Central Europe'
slug = 'central-europe'
countries = countriesListCca2
  .filter((country) => country.subregion == 'Central Europe')
  .map((country) => country.cca2)
  .sort()
countryGrop = new CountryGroup(name, slug, countries)
coutryGroupsByRegion.add(countryGrop)

//------------------------------------------------
//------------- Northern Europe
//------------------------------------------------
name = 'Northern Europe'
slug = 'northern-europe'
countries = countriesListCca2
  .filter((country) => country.subregion == 'Northern Europe')
  .map((country) => country.cca2)
  .sort()
countryGrop = new CountryGroup(name, slug, countries)
coutryGroupsByRegion.add(countryGrop)

//--- Export groupcollection
export default coutryGroupsByRegion
