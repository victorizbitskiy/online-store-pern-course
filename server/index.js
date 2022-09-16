const path = require('path')
require('dotenv').config({path: `${__dirname}/.env`})
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')

const PORT = process.env.port || 5000

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({message: 'WORKING'})
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()