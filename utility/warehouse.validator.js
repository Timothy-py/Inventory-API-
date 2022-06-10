const {body} = require('express-validator');

const validator = () => {
    return[
        body('name')
        .notEmpty()
        .withMessage('Name cannot be empty')
        .isString()
        .withMessage('Name must be a string'),

        body('country')
        .notEmpty()
        .withMessage('Country cannot be empty')
        .isString()
        .withMessage('Country must be a valid string'),

        body('city')
        .notEmpty()
        .withMessage('City cannot be empty')
        .isString()
        .withMessage('City must be a valid string'),
    ]
}

module.exports = validator;