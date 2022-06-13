const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// import inventory schema
const {warehouse} = require('./warehouse.model')

// configure inventory schema
const inventory = new Schema({
    name: {
        type: String,
        required: [true, 'Add a product name']
    },
    description: {
        type: String,
        required: true
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
        type: Schema.Types.Mixed,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    warehouse:[{
        type: Schema.Types.ObjectId,
        ref: 'Warehouse',
        required: false 
    }]
}, {
    timestamps: true
})

// initialize inventory model
const Inventory = mongoose.model('Inventory', inventory)

module.exports = {Inventory, inventory}