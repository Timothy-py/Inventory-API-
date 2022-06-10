const router = require('express').Router();

// import controllers

// create warehouse
router.get('', (req, res) => {
    res.status(200).send('Create warehouse');
})

module.exports = router;