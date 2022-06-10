const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// configure warehouse schema
const warehouse = new Schema({
    name: {
        type: String,
        require: false
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    inventory: [{
        type: Schema.Types.ObjectId,
        ref: 'Inventory'
    }]
}, {
    timestamps: true
})

// initialize warehouse model
const Warehouse = mongoose.model('Warehouse', warehouse);

module.exports = {Warehouse, warehouse}