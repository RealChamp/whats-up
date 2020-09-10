import express from 'express'
import mongoose from 'mongoose'
import Messages from './dbMessages.js'
import Pusher from 'pusher'

// app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: '1070905',
    key: 'b78766f69773703ce3a4',
    secret: '7e76b5062905d966424b',
    cluster: 'eu',
    encrypted: true
  });

  const db = mongoose.connection

  db.once('open', () => {
      console.log('db connected')
  })

// middleware
app.use(express.json())

// db config
    const connection_url = 'mongodb+srv://admin:W0ZTj9rvC810VROf@cluster0.yimfk.mongodb.net/whatappDB?retryWrites=true&w=majority'

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true  
})

// api routes(end points)
app.get('/', (req,res) => res.status(200).send('hello world'))

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

app.get('/messages/sync', (req,res) => {
    Messages.find((err,data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// listener
app.listen(port, ()=> console.log(`listening on ${port}`))