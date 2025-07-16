// This is a file to structure some utils methods needed accross the project
export function buildUrl(baseUrl, relativePath) {
  return new URL(relativePath, baseUrl).toString()
}

// Shuffle array
export function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5)
}

// This function returns the emoji icon related to a cca2 country
//
// Background: Unicode Flag Emojis
// Each country flag emoji is made by combining two special characters called "Regional Indicator Symbols" that correspond to uppercase Latin letters A–Z.
//
// For example:
// "US" → '🇺' + '🇸' → 🇺🇸
// "BR" → '🇧' + '🇷' → 🇧🇷
//
// These special regional symbols have Unicode code points starting at U+1F1E6, which corresponds to 'A'.
export function cca2ToFlagEmoji(cca2) {
  const UNICODE_STARTING_VALUE = 0x1f1a5
  return [...cca2.toUpperCase()]
    .map((char) => String.fromCodePoint(char.charCodeAt(0) + UNICODE_STARTING_VALUE))
    .join('')
}

export function cca2ListToFlagEmojiString(cca2List, maxLength = undefined) {
  let emojiFlagsString = ''
  for (const cca2 of cca2List.slice(0, maxLength)) {
    emojiFlagsString = emojiFlagsString.concat(cca2ToFlagEmoji(cca2))
  }
  return emojiFlagsString
}
