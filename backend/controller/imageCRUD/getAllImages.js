const express = require(`express`);
const router = express.Router();
const Image = require('../../model/ImagensDAO');
const localImage = new Image();

router.post('/', (req, res) => {
    const data = localImage.getAllImages();

    res.status(201).json(data);
})

module.exports = router;