import { CountryGroup, CountryGroupCollection } from './countryGroups'

const categoryName = 'Region'
const coutryGroupsByRegion = new CountryGroupCollection(categoryName)

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

export default coutryGroupsByRegion
