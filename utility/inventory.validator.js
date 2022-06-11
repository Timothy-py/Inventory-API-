const {body} = require('express-validator');

const validator = () => {
    return[
        body('name')
        .notEmpty()
        .withMessage('Name cannot be empty')
        .isString()
        .withMessage('Name must be a string'),
        body('description')
        .notEmpty()
        .withMessage('Description cannot be empty')
        .isString()
        .withMessage('Name must be a string'),
        body('price')
        .notEmpty()
        .withMessage('Price cannot be empty')
        .isInt()
        .withMessage('Price can only be a number'),
        body('unit')
        .notEmpty()
        .withMessage('Unit cannot be empty')
        .isInt()
        .withMessage('Unit can only be a number'),
        body('quantity')
        .notEmpty()
        .withMessage('Quantity cannot be empty')
        .isInt()
        .withMessage('Quantity can only be a number')
    ]
}

module.exports = validator;