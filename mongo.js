const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb://fullstack:${password}@ds161224.mlab.com:61224/fullstack2019-notes`

mongoose.connect(url, { useNewUrlParser: true })

const Note = mongoose.model('Note', {
  content: String,
  date: Date,
  important: Boolean,
})

const note = new Note({
  content: 'Promise auttaa asynkronisissa operaatiossa',
  date: new Date(),
  important: false,
})


note.save().then(() => {
  console.log('note saved!')
  mongoose.connection.close()
})