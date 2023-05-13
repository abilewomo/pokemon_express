const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () =>{console.log('connected to mongo')})

//data
const Pokemon = require('./models/pokemon')
//middleware
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//routes
// Index : Show all the things! - GET /pokemons
app.get('/', (req, res) =>{
    res.send('<a href="/pokemon">Welcome to the Pokemon App!</a>')
})
app.get('/pokemon', (req, res) =>{
    Pokemon.find({}, (error,allPokemons) =>{
       res.render('Index',{pokemons: allPokemons}) 
    })
    
})
// New : An empty form for a new thing - GET /fruits/new
app.get('/pokemon/new',(req, res) =>{
    res.render('New')
})
// Delete : Get rid of this particular thing! - DELETE /fruits/:id
// Update : Update this specific thing with this updated form - PUT /fruits/:id
// Create : Make a new thing with this filled out form - POST /fruits
app.post('/pokemon', (req, res) =>{
    Pokemon.create(req.body, () => {
        res.redirect('/pokemon')
    })
})
// Edit : A prefilled form to update a specific thing - GET /fruits/:id/edit
// Show : Show me this one thing! - GET /fruits/:id (edited) 
app.get('/pokemon/:id', (req, res) =>{
    Pokemon.findById(req.params.id, (err, foundPokemon) =>{
        res.render('Show',{pokemon:foundPokemon})
    })  
})
//listening 
app.listen(port, () =>{
    console.log(`Listening on port, ${port}`)
})