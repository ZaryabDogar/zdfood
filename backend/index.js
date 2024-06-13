const connectToMongo = require('./db');   
const express = require('express')
const app = express()
const port = 5000
//connect to database
connectToMongo();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})