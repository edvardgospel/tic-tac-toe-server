const express = require('express')
const router = express.Router()
const { getGame, postGame, putGame, deleteGame, joinGame } = require('./gameController')

router.get('/join', joinGame);
router.get('/:id', getGame);
router.post('/', postGame);
router.put('/:id', putGame);
router.delete('/:id', deleteGame);

module.exports = router