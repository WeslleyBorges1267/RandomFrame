const express = require(`express`);
const router = express.Router();
const Image = require('../../model/ImagensDAO');
const localImage = new Image();
const fs = require('fs');

router.post('/', (req, res) => {
    const {idImage} = req.body;
    const data = localImage.getOneImageData(idImage);
    if(data == null){
        res.status(404).json("Nenhum dado da imagem foi encontrado");    
    }else{
        console.log(data);
        const fileName = data['id_imagem'] + '.' + data['extensao_imagem']
        try{
            fs.unlinkSync(__dirname + `/../../images/${fileName}`);
        }catch (e){
            console.log(`O arquivo ${fileName} não foi encontrado para ser deletado`)
        }
        localImage.deleteImage(idImage);
        res.status(200).json("Hello world");
    }
})

module.exports = router;