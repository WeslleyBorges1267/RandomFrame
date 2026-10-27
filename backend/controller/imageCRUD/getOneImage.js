const express = require(`express`);
const router = express.Router();
const Image = require('../../model/ImagensDAO');
const localImage = new Image();

router.post('/', (req, res) => {
    const {id_imagem} = req.body;
    let data = null;
    try{
        data = localImage.getOneImageData(id_imagem);
        if(data == null){
            res.status(404).json("No data found");
        }else{
            res.status(200).json(data);
        }
    }catch(exception){
        console.log(`Erro ao tentar encontrar a imagem de id ${id_imagem}`, exception);
        res.status(500).json(`Erro ao tentar encontrar a imagem de id ${id_imagem}`);
    }
})

module.exports = router;