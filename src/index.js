const express = require('express')
const path = require('path')
const hbs = require('hbs')
require('dotenv').config()
require('./db/mongoose')

const plannerRouter = require('./routers/planner')
const listRouter = require('./routers/list')

const pubdir = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

const app = express()

app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(pubdir))

const port = process.env.PORT || 3001

app.use(express.json())

app.get('/', (req,res)=> {
    res.render('index', {
        title: 'Travello',
        description: 'Select a planner for your group!'
    })
})

app.get('/create', (req,res)=> {
    res.render('create', {
        title: 'Create Planner',
        description: 'Create a planner for your group!'
    })
})

app.get('/join', (req,res)=> {
    res.render('join', {
        title: 'Join Planner',
        description: 'Join an existing planner!'
    })
})

app.get('/forgotPass', (req, res) => {
    res.render('forgotPass', {
        title: "Recover your planner!",
        description: "Enter admin email to proceed.."
    })
})

app.get('/logout/success', (req,res)=> {
    res.render('logout', {
        title: 'We\'re sad you\'re leaving...',
        description: 'Come back soon!'
    })
})

app.get('/logout/failure', (req,res)=> {
    res.render('logout', {
        title: 'Can\'t log you out..',
        description: 'Try again!'
    })
})


app.use(plannerRouter)
app.use(listRouter)

app.listen(port, () => {
    console.log("Server up on port", port)
})