// This is a file to structure some utils methods needed accross the project
export function buildUrl(baseUrl, relativePath) {
  return new URL(relativePath, baseUrl).toString()
}
