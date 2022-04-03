const Game = require('./game')

const getGame = (req, res) => {
  const { id } = req.params
  Game.findById(id, (err, game) => {
    if (err) {
      res.status(404).json({ err })
    } else if (game) {
      const { _id, fields, nextPlayer } = game
      res.status(200).json({ id: _id, fields, nextPlayer })
    } else {
      res.status(404).json({ err: 'Resource not found' })
    }
  })
}
const postGame = (req, res) => {
  Game.create({}, (err, game) => {
    if (err) {
      res.status(404).json({ err })
    } else {
      const { _id, fields, nextPlayer } = game
      res.status(201).json({ id: _id, fields, nextPlayer })
    }
  })
}
const putGame = (req, res) => {
  const { id } = req.params
  const { fields, nextPlayer } = req.body
  if (!fields || !nextPlayer) {
    res.status(400).json({ err: 'Missing fields' })
    return
  }
  Game.findByIdAndUpdate(id, { fields, nextPlayer }, (err, game) => {
    if (err) {
      res.status(502).json({ err })
    } else if (game) {
      const { _id, fields, nextPlayer } = game
      res.status(200).json({ id: _id, fields, nextPlayer })
    } else {
      res.status(404).json({ err: 'Resource not found' })
    }
  })
}

const deleteGame = (req, res) => {
  const { id } = req.params
  Game.findByIdAndDelete(id, (err, game) => {
    if (err) {
      res.status(404).json({ err })
    } else if (game) {
      const { _id, fields, nextPlayer } = game
      res.status(200).json({ id: _id, fields, nextPlayer })
    } else {
      res.status(404).json({ err: 'Resource not found' })
    }
  })
}

const joinGame = (req, res) => {
  Game.find({ isFull: false }, (err, games) => {
    if (err) {
      res.status(404).json({ err })
    } else if (games) {
      //const { _id, fields, nextPlayer } = game
      if (!games.length) {
        res.status(404).json({ err: 'Resource not found' })
      } else {
        const { _id, fields, nextPlayer } = games[0]
        res.status(200).json({ id: _id, fields, nextPlayer })
      }
    } else {
      res.status(404).json({ err: 'Resource not found' })
    }
  })
}

module.exports = {
  getGame,
  postGame,
  putGame,
  deleteGame,
  joinGame
}