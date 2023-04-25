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

// Retourne les meilleurs sont d'un artiste
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

// Démarage du serveur
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
