const AWS = require('aws-sdk');
const {uuid} = require('uuidv4');

// import model
const Inventory = require('../models/inventory.model');

// create inventory
exports.createInventory = async(req, res) => {
    try {
        const {
            name, description,
            price, unit,
            quantity, other_details
        } = req.body;
        
        return res.status(200).json({
            url: req.image.url
        })

    } catch (error) {
        return res.status(500).json({
            error: `API ERROR - ${error}`
        })
    }
}