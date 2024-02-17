const express = require('express')
const app = express()

const login = require('./login.json')
const register = require('./register.json')
const validate = require('./validate-unique-email.json')
const profileGet = require('./profile.json')
const profile = require('./profileGet.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("MY API")
})

app.post('/login', (req, res) =>{
    res.send(login)
})

app.post('/register', (req, res) =>{
    res.send(register)
})

app.post('/validate', (req, res) =>{
    res.send(validate)
})


app.post('/profile', (req, res) =>{
    res.send(profile)
})

app.get('/profile', (req, res) =>{
    res.send(profileGet)
})


app.listen(port, () => {
    console.log(`App is listening to port ${port}`)
})