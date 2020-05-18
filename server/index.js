const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/api/andrew', (req, res) => {
  console.log('I GOT A REQUEST A /api/andrew')
  res.status(200).send('Andrew')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id', ctrl.getUserById)

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`)
)
