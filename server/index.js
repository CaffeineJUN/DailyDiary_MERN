const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

const config = require('./config/key')

const mongoose = require('mongoose')
const connect = mongoose
    .connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

app.use(express.urlencoded({extended: true, limit: '10000mb'}))
app.use(express.json({extended: true, limit: '10000mb'}))
app.use(cookieParser())

app.use('/api/users', require('./routes/users'))
app.use('/api/post', require('./routes/post'))
app.use('/api/comment', require('./routes/comment'))
app.use('/api/like', require('./routes/like'))

//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'))

    // index.html for all page routes
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server Running at ${port}`)
})
