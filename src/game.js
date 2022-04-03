const mongoose = require('mongoose')

const gameSchema = mongoose.Schema({
  fields: {
    type: Array,
    required: true,
    default: ['','','','','','','','','',]
  },
  nextPlayer: {
    type: String,
    required: true,
    default: 'X'
  },
  isFull: {
    type: Boolean,
    required: true,
    default: false
  }
})

module.exports = mongoose.model('Game', gameSchema)