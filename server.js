// load the things we need
const express = require("express")
const app = express()


  
//set view engin to ejs
app.set('view engine', 'ejs');


// provide static data in express
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))




// use res.render to load up an ejs view file

//index page
app.get("/", (req, res) => {
    res.render('index')
})

const PORT = process.env.PORT || 2000




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})