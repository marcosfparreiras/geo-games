import fs from 'fs'
import { countriesListCca2 } from '../utils/countriesListCca2.js'

console.log('Running script')

const subRegionValue = 'South America'
const filteredCountries = countriesListCca2.filter((country) => country.subregion == subRegionValue)
console.log(filteredCountries.length)

const mappedCountries = filteredCountries
  .map((country) => `${country.cca2} - ${country.name.common}`)
  .sort()

fs.writeFileSync(
  `./${subRegionValue.replace(/\s/g, '_')}.json`,
  JSON.stringify(mappedCountries, null, 2),
)

console.log(
  `Saved ${mappedCountries.length} countries to ${subRegionValue.replace(/\s/g, '_')}.json`,
)
