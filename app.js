const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.send('Hello Express!')
})
app.get('/hello', (req, res) => {
  // res.send('Hello World!')
  res.send('Hello')
})
app.get('/bye', (req, res) => {
  // res.send('Hello World!')
  res.send('Bye')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})