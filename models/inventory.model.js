const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// configure inventory schema
const inventory = new Schema({
    name: {
        type: String,
        required: [true, 'Add a product name']
    },
    description: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: [true, 'Include the product price']
    },
    unit: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    other_details: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: [true, 'Include image for your product']
    },
    locations: {
        type: Array,
        required: [false]
    } 
}, {
    timestamps: true
})

// initialize inventory model
const Inventory = mongoose.model('Inventory', inventory)

module.exports = {Inventory, inventory}