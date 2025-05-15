const express = require('express')
const app = express()
const User = require('./models/users-model')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send({status:"OK", message:"This is user microservices"})
})

app.post('/registration', async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            error: 'Provide email and passowrd',
        })
    }

    await User.findOne({email}, (err, user) => {
        if (err) return res.status(500).json({ success: false, error: err })
        if (user) return res.status(409).json({ success: false, error: 'User already exist' })

        user = new User(req.body)

        user.save().then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'User registered!',
            })
        }).catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
    })
})

app.listen( 4000, () => {
    console.log(`Users service is running on port 4000`);
})

