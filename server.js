const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv').config()
const connectDB = require('./src/db')

const PORT = process.env.PORT || 8000

connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.use('/games', require('./src/gameRoutes'))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})