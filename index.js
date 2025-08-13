const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/cool-new-feature', (req, res) => {
  res.send('Hello from the cool new feature!')
})

app.get('/another-feature', (req, res) => {
  res.send('Hello from another feature!')
})

app.get('/feature-3', (req, res) => {
  res.send('Hello from another feature!')
})

app.get('/feature-4', (req, res) => {
  res.send('Hello from another feature!')
})

app.get('/feature-5', (req, res) => {
  res.send('Hello from another feature!')
})

app.get('/feature-6', (req, res) => {
  res.send('Hello from another feature!')
})

app.get('/feature-7', (req, res) => {
  res.send('Hello from another feature! - hotfix!!!')
})

app.get('/feature-8', (req, res) => {
  res.send('Hello from another feature!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
