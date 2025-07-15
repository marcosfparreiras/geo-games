import { CountryGroupCollection } from './countryGroups'
import coutryGroupsByColorSet from './countryGroupsByColorSet'
import coutryGroupsByRegion from './countryGroupsByRegion'

// Build a single collection merging all the existing collections
const countryGroupsAll = new CountryGroupCollection()

const collectionsList = [coutryGroupsByColorSet, coutryGroupsByRegion]

// Iterate over each collection
for (const collectionList of collectionsList) {
  // Iterate over each countryGroup in that collection
  for (const countryGroup of collectionList.collection) {
    countryGroupsAll.add(countryGroup)
  }
}

export default countryGroupsAll
