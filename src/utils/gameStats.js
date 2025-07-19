import LocalStorageDB from './localStorageDB'

export class GameStats {
  constructor(lastScore = 0, bestScore = 0, totalTries = 0, gameSize = 0) {
    this.lastScore = lastScore
    this.bestScore = bestScore
    this.totalTries = totalTries
    this.gameSize = gameSize
  }

  incrementTotalTries() {
    this.totalTries += 1
  }

  updateBestScore() {
    if (this.lastScore > this.bestScore) {
      this.bestScore = this.lastScore
    }
  }
}

export class GameStatsDB {
  constructor(
    topic,
    gameSlug,
    subGameSlug,
    gameStats = new GameStats(),
    storageDb = new LocalStorageDB(),
  ) {
    this.topic = topic
    this.gameSlug = gameSlug
    this.subGameSlug = subGameSlug

    this.storageDb = storageDb
    this.storageKey = storageDb.buildSubGameKey(topic, gameSlug, subGameSlug)

    this.gameStats = gameStats
  }

  get() {
    this.storageDb.get(this.storageKey)
  }
}
