const Tag = require('./../model/TagsDAO.js');
const localTag = new Tag();
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const {idTag} = req.body;
    const data = localTag.getOneTag(idTag);
    if(data == null){
        res.status(404).json(data);
    }else{
        res.status(200).json(data);
    }
    
})

module.exports = router;