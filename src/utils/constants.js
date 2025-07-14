// File used to centralized constants shared accross the project

import { buildUrl } from './utils'

export const WEBSITE_DOMAIN = 'geoflagger.netlify.app/'
export const WEBSITE_URL_HTTPS = `https://${WEBSITE_DOMAIN}`
export const WEBSITE_URL_HTTP = `http://${WEBSITE_DOMAIN}`
export const WEBSITE_URL = WEBSITE_URL_HTTPS

const matchFlagGamePath = 'match-flag'
export const MATCH_FLAG_GAME_URL = buildUrl(WEBSITE_URL, matchFlagGamePath)
