const users = require('../data.json')

module.exports = {
  getAllUsers: (req, res) => {
    const { email } = req.query

    if (email) {
      const filteredUsers = users.filter((element) =>
        element.email.includes(email)
      )
      res.status(200).send(filteredUsers)
    } else {
      res.status(200).send(users)
    }
  },

  getUserById: (req, res) => {
    // req.params.user_id
    const { user_id } = req.params
    const user = users.find((element) => element.id === +user_id)

    if (user) {
      res.status(200).send(user)
    } else {
      res.status(404).send('User not found')
    }
  },
}
