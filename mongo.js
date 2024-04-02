require('dotenv').config()

const mongoose = require('mongoose')

const url =
    `mongodb+srv://koala:${process.env.PASSWORD}@node-cluster.abxjazt.mongodb.net/noteApp?retryWrites=true&w=majority&appName=node-cluster`

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//     content: "Football is football what can I do sometimes",
//     important: false,
// })

// note.save().then(result => {
//     console.log('SAVED');
//     mongoose.connection.close()
// })

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
