const mongoose = require('mongoose');
const Schema = mongoose.Schema

const usersBooking = new Schema({
    user_id: {
        type: Number,
        require: true
    },
    movie_id: {
        type: Number,
        require: true
    }
},
    {
        timestamps: true,
        versionKey: false, // Here You have to add.
    }
)


module.exports = mongoose.model('users_booking', usersBooking)