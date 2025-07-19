// This class is a wrapper around the local storage needed operations for the application
class LocalStorageDB {
  buildSubGameKey(topic, gameName, subGameSlug) {
    return `topic:${topic};game:${gameName};subgame:${subGameSlug}`
  }

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key) {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
  }

  addValue(key, varName, varValue) {
    const storedJson = this.get(key)
    const jsonValues = storedJson ? storedJson : {}
    jsonValues[varName] = varValue
    this.set(key, jsonValues)
  }

  // getValueAsInteger(key) {
  //   const storedValue = this.getValue(key)
  //   const parsedStored = parseInt(storedValue, 10)
  //   const parsedStoredInt = +parsedStored || 0
  //   return parsedStoredInt
  // }

  // keys() {
  //   return Object.keys(localStorage)
  // }
}

export default LocalStorageDB
