import LocalStorageDB from '@/utils/localStorageDB'

import { describe, it, beforeEach, expect } from 'vitest'

describe('LocalStorageDB', () => {
  let db

  // Before every test, ensure that the localStorage is empty
  beforeEach(() => {
    db = new LocalStorageDB()
    localStorage.clear()
  })

  describe('set and get', () => {
    it('sets and gets an item', () => {
      db.set('user', { name: 'Alice', age: 42 })
      const result = { name: 'Alice', age: 42 }

      expect(db.get('user')).toEqual(result)
      expect(result.age).toBe(42) // tests type (number is returned as number instead of string)
    })
  })

  describe('addValue', () => {
    const storageKey = 'storageKey'
    const jsonKey = 'jsonKey'
    const newValue = 'newValue'
    const oldValue = 'oldValue'

    describe('when storage does not exist', () => {
      it('adds a new value to the json', () => {
        db.addValue(storageKey, jsonKey, newValue)
        expect(db.get(storageKey)).toEqual({ jsonKey: newValue })
      })
    })

    describe('when storage key already exists', () => {
      const otherJsonKey = 'otherJsonKey'
      const otherJsonValue = 'otherJsonValue'

      beforeEach(() => {
        db.addValue(storageKey, otherJsonKey, otherJsonValue)
      })

      describe('when the json key already exists', () => {
        beforeEach(() => {
          db.addValue(storageKey, jsonKey, oldValue)
        })

        it('updates the existing value in the JSON, keeping the rest of the json untouched', () => {
          // Ensure that old value is stored
          expect(db.get(storageKey)).toEqual({ otherJsonKey: otherJsonValue, jsonKey: oldValue })

          // Update value
          db.addValue(storageKey, jsonKey, newValue)
          expect(db.get(storageKey)).toEqual({ otherJsonKey: otherJsonValue, jsonKey: newValue })
        })
      })

      describe('when the json key does not exist', () => {
        it('adds a new value to the json, keeping hte rest of the json untouched', () => {
          // Ensure that JSON exists without the json key to be added
          expect(db.get(storageKey)).toEqual({ otherJsonKey: otherJsonValue })

          // Add new value to the JSON
          db.addValue(storageKey, jsonKey, newValue)
          expect(db.get(storageKey)).toEqual({ otherJsonKey: otherJsonValue, jsonKey: newValue })
        })
      })
    })
  })

  describe('buildSubGameKey', () => {
    it('builds the expected key name for the topic, game and subgame', () => {
      const key = db.buildSubGameKey('myTopic', 'theGame', 'anySlug')
      const expectedResult = 'topic:myTopic;game:theGame;subgame:anySlug'
      expect(key).toBe(expectedResult)
    })
  })
})
