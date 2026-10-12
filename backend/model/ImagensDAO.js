const database = require(`./../sqlite/database.js`);

class Image{

    createImage(extension_image) {
        const query = database.prepare(`
            INSERT INTO imagens (extensao_imagem) VALUES (?);
        `);
        
        const result = query.run(extension_image);
        const newIdImage = result.lastInsertRowid;
        query.close();

        return newIdImage;
    }

}

module.exports = Image;