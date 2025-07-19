// File used to centralized constants shared accross the project

import { buildUrl } from './utils'

export const WEBSITE_DOMAIN = 'geoflagger.netlify.app/'
export const WEBSITE_URL_HTTPS = `https://${WEBSITE_DOMAIN}`
export const WEBSITE_URL_HTTP = `http://${WEBSITE_DOMAIN}`
export const WEBSITE_URL = WEBSITE_URL_HTTPS

const matchFlagGamePath = 'match-flag'
export const MATCH_FLAG_GAME_URL = buildUrl(WEBSITE_URL, matchFlagGamePath)

// Game names
class GameValues {
  constructor(topic, title, slug) {
    this.topic = topic
    this.title = title
    this.slug = slug
  }
}

export const gamesInfo = Object.freeze({
  MATCH_THE_FLAG: new GameValues('geography', 'Match the Flag', 'matchTheFlag'),
  // ANIMAL_QUIZ: 'Animal Quiz',
  // ART_TRIVIA: 'Art Trivia',
  // add more games here
})
