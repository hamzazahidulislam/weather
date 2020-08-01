const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/api/history', require('./api/route'))



//rout
// app.get('/', (req, res) => {
//     res.send('<h1>Hello I am a Node Server Running on PORT 4444</h1>')
// })

const PORT = process.env.PORT || 4444
app.listen(PORT, () => {
    console.log('APP is Runnig on PORT ' + PORT)
    mongoose.connect(`mongodb+srv://admin:Hamza2020@cluster0.r2pfu.mongodb.net/weather-api?retryWrites=true&w=majority`, { useNewUrlParser: true }, () => {
        console.log('Database Connected')
    })
})