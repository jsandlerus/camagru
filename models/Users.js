//Creating a schema to hold the different users information
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmed: {
        type: Boolean,
    }
});

module.exports = User = mongoose.model('user', UserSchema);