const User = require('../models/User')

class UserController {
  async store (req, res) {
    const { email } = req.body

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: 'User already exists, existing email in our database!' })
    }

    const user = await User.create(req.body)

    return res.json(user)
  }

  async index (req, res) {
    const users = await User.find()
    return res.status(200).json(users)
  }
}

module.exports = new UserController()
