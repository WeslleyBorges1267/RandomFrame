const express = require(`express`);
const router = express.Router();
const multer = require('multer');
const Image = require('../../model/ImagensDAO');
const localImage = new Image();
const Imagens_tags = require(`../../model/Imagens_tagsDAO`);
const localImagens_tags = new Imagens_tags();
let newIdImage = null;

const crypto = require('node:crypto');

/*
function gerarNomeArquivo(fileExtension) {
    return crypto.randomUUID() + '.' + fileExtension;
}
*/

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/../../images/');
    },
    filename: (req, file, cb) => {
        const fileExtension = file.mimetype.split('/')[1];
        newIdImage = localImage.createImage(fileExtension);
        cb(null, newIdImage + '.' + fileExtension);
    }
});

const upload = multer({ storage });


router.post('/', upload.single('file_image'), function (req, res, next) {
  const {tags_image} = req.body;
  const tags_array = tags_image.split(',');
  console.log(tags_array);
  for(let i = 0; i < tags_array.length; i++) {
    console.log("Id nova imagem:" + newIdImage)
    localImagens_tags.createImageTag(newIdImage, tags_array[i]);
  }

  
  res.status(200).json("Hello world");
})


module.exports = router;