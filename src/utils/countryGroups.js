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
  constructor(collectionName = '') {
    this.collection = []
    this.collectionName = collectionName
  }

  add(countryGroup) {
    this.collection.push(countryGroup)
  }

  get(groupSlug) {
    return this.collection.find((countryGroup) => countryGroup.groupSlug == groupSlug)
  }

  // keys() {
  //   return Object.keys(this.collection)
  // }

  // [Symbol.iterator]() {
  //   var index = -1;
  //   var data  = this._data;

  //   return {
  //     next: () => ({ value: data[++index], done: !(index in data) })
  //   };
  // };
}

export { CountryGroup, CountryGroupCollection }
