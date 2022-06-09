const router = require('express').Router();

// import controllers

// index
router.get('', (req, res)=>{
    res.status(200).send('Inventory API');
})

module.exports = router;