const express = require(`express`);
const router = express.Router();
const Image = require('../../model/ImagensDAO');
const localImage = new Image();

router.post('/', (req, res) => {
    const {idImage, tags_image} = req.body;
    
})

module.exports = router;