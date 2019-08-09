'use strict'
const mongoose = require('mongoose');

const shopSchema = new mongoose.Schema({
    category: {
        type: String,
        required: 'Category can\'t be empty.'
    },
    store: {
        type: String,
        required: 'Store name can\'t be empty.'
    },
    address: {
        type: String,
        required: 'Address can\'t be empty.'
    },
    city: {
        type: String,
        required: 'City can\'t be empty.'
    },
    type: {
        type: String,
        default: ''
    },
    website: {
        type: String,
        default: ''
    },
    facebook: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    worktime: {
        type: String,
        default: ''
    },
    reviews: {
        type: String,
        default: ''
    },
    extra: {
        type: String,
        default: ''
    }
});

module.exports = mongoose.model('Shop', shopSchema);