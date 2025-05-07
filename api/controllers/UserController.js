const jwt = require('jsonwebtoken');
const usersModel = require('../models/users-model')
require('dotenv').config()


const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: 'You must provide credentials',
        })
    }

    await usersModel.findOne({ email }, (err, user) => {
        if (err) return res.status(500).json({ success: false, error: err })
        if (!user) return res.status(404).json({ success: false, error: 'User not found' })

        // Generate a token
        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ success: true, token, user })
    })
}

health = (req, res) => {
    return res.json({
        success: true,
        message: 'Health Test',
    })
}


module.exports = {
    login,
    health
}