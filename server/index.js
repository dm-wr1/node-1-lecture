const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.use(function (req, res, next) {
  console.log("We got a request cap'n")
  next()
})

app.get('/api/andrew', (req, res) => {
  console.log('I GOT A REQUEST A /api/andrew')
  res.status(200).send('Andrew')
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id', ctrl.getUserById)
app.post('/api/users', ctrl.createUser)
app.put('/api/users/:user_id', ctrl.editUser)
app.delete('/api/users/:user_id', ctrl.deleteUser)

app.listen(SERVER_PORT, () =>
  console.log(`Server running on port ${SERVER_PORT}`)
)
