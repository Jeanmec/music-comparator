const express = require('express')
const axios = require('axios')

const app = express()
const port = 3000

app.get('/artist/:id', async (req, res) => {
  let url = 'https://api.deezer.com/artist/' + req.params.id

  axios({
    method: 'get',
    url
  })
    .then(function (response) {
      res.send(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})
