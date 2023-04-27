const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

const cors = require('cors')
app.use(
  cors({
    origin: '*'
  })
)

// Retourne les infos d'un artiste
app.get('/artist/:id', async (req, res) => {
  let url = 'https://api.deezer.com/artist/' + req.params.id

  axios({
    method: 'get',
    url
  })
    .then((response) => {
      res.send(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
})

// Retourne les meilleurs sons d'un artiste
app.get('/artist/:id/top', async (req, res) => {
  let url = 'https://api.deezer.com/artist/' + req.params.id + '/top?limit=5'

  axios({
    method: 'get',
    url
  })
    .then((response) => {
      res.send(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
})

// Retourne les albums d'un artiste
app.get('/artist/:id/albums', async (req, res) => {
  let url =
    'https://api.deezer.com/artist/' +
    req.params.id +
    '/albums?index=' +
    req.params.index +
    '&limit=5'

  axios({
    method: 'get',
    url
  })
    .then((response) => {
      res.send(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
})

// Retourne les 10 artistes les plus avec le plus d'écoute en france
app.get('/chart/artist', async (req, res) => {
  let url = 'https://api.deezer.com/chart/0/artists'

  axios({
    method: 'get',
    url
  })
    .then((response) => {
      res.send(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
})

// Retourne les 10 artistes les plus avec le plus d'écoute en france
app.get('/chart/artist', async (req, res) => {
  let url = 'https://api.deezer.com/chart/0/artists'

  axios({
    method: 'get',
    url
  })
    .then((response) => {
      res.send(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
})

// Retourne les 10 artistes recherchés
app.get('/search/artist', async (req, res) => {
  let url = 'https://api.deezer.com/search/artist?limit=10&q=' + req.query.query

  axios({
    method: 'get',
    url
  })
    .then((response) => {
      res.send(JSON.stringify(response.data))
    })
    .catch((error) => {
      console.log(error)
    })
})

// Démarage du serveur
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
