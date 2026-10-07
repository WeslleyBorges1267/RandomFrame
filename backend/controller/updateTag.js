const Tag = require('./../model/TagsDAO.js');
const localTag = new Tag();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const {newNameTag, idTag} = req.body;
    localTag.updateTag(newNameTag, idTag)
    res.status(200).json("Nome da tag alterada com sucesso")
})

module.exports = router;