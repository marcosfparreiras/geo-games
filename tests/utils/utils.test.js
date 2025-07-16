import { describe, it, expect } from 'vitest'

import { buildUrl, cca2ToFlagEmoji, cca2ListToFlagEmojiString } from '@/utils/utils'

describe('.buildUrl', () => {
  const path = 'my-path'
  const expectedResult = 'http://my-url.com/my-path'

  describe('when url has trailing slash', () => {
    it('builds url correctly', () => {
      const baseUrl = 'http://my-url.com/'
      const result = buildUrl(baseUrl, path)
      expect(result).toBe(expectedResult)
    })
  })

  describe('when url does not have trailing slash', () => {
    it('builds url correctly', () => {
      const baseUrl = 'http://my-url.com'
      const result = buildUrl(baseUrl, path)
      expect(result).toBe(expectedResult)
    })
  })
})

describe('cca2ToFlagEmoji', () => {
  const expectedResult = '🇧🇷'

  describe('when cca2 is lower case', () => {
    it('converts to flag emoji', () => {
      const cca2 = 'br'
      const result = cca2ToFlagEmoji(cca2)
      expect(result).toBe(expectedResult)
    })
  })

  describe('when cca2 is upper case', () => {
    it('converts to flag emoji', () => {
      const cca2 = 'BR'
      const result = cca2ToFlagEmoji(cca2)
      expect(result).toBe(expectedResult)
    })
  })
})

describe('cca2ListToFlagEmojiString', () => {
  const cca2List = ['br', 'de', 'us', 'vn', 'tn', 'aq', 'ws']

  describe('when no maxLength is defined', () => {
    it('returns the flags for the whole list of cca2', () => {
      const expectedResult = '🇧🇷🇩🇪🇺🇸🇻🇳🇹🇳🇦🇶🇼🇸'
      const result = cca2ListToFlagEmojiString(cca2List)
      expect(result).toBe(expectedResult)
    })
  })

  describe('when maxLength is defined', () => {
    describe('when maxLength is smaller than list length', () => {
      it('returns the subset of flags for the size of the maxLength list of cca2', () => {
        const maxLength = 3
        const expectedResult = '🇧🇷🇩🇪🇺🇸'
        const result = cca2ListToFlagEmojiString(cca2List, maxLength)
        expect(result).toBe(expectedResult)
      })
    })

    describe('when maxLength is greater than list length', () => {
      it('returns the flags for the whole list of cca2', () => {
        const maxLength = 30
        const expectedResult = '🇧🇷🇩🇪🇺🇸🇻🇳🇹🇳🇦🇶🇼🇸'
        const result = cca2ListToFlagEmojiString(cca2List, maxLength)
        expect(result).toBe(expectedResult)
      })
    })
  })
})
