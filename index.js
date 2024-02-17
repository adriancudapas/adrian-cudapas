const express = require('express')
const app = express()

const login = require('./myAPI.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("MY API")
})

app.get('/login', (req, res) =>{
    res.send(login)
})


app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})