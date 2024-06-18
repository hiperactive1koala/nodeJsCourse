require('dotenv').config()

const mongoose = require('mongoose')

const url = process.env.TEST_MONGODB_URI

mongoose.set('strictQuery', false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Some HTML things here',
  important: false,
})
const secondNote = new Note({
  content: 'Some JS things here',
  important: true,
})

note.save().then(result => {
  console.log('SAVED')
})
secondNote.save().then(result => {
  console.log('SAVED SECOND TIME')
  mongoose.connection.close()
})

Note.find({}).then(result => {
  result.forEach(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
