const mongoose = require('mongoose');

const { Schema } = mongoose;

const RegisterSchema = new Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true
    },

    cmail: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    
    gender: {
        type: String,
        required: true
    },
    studentno: {
        type: String,
        required: true
    },
    unirollno: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('form',RegisterSchema);