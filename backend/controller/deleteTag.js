const Tag = require('./../model/TagsDAO.js');
const localTag = new Tag();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const {idTag} = req.body;
    localTag.deleteTag(idTag);
    res.status(200).json("Tag deletada com sucesso");
})

module.exports = router;