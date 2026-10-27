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

    deleteImage(id_imagem) {
        const query = database.prepare(`
            DELETE FROM imagens_tags WHERE id_imagem = ?;
        `);
        
        const result = query.run(id_imagem);
        query.close();

        const query2 = database.prepare(`
            DELETE FROM imagens WHERE id_imagem = ?;
            `)
        
        const result2 = query2.run(id_imagem);
        query2.close();
    }

    getOneImageData(idImage) {
        const query = database.prepare(`
                SELECT * FROM imagens WHERE id_imagem = ?;
            `)
        const returnData = query.all(idImage);
        return returnData[0];

    }

    getAllImages() {
        const query = database.prepare(`
            SELECT * FROM imagens ORDER BY id_imagem DESC;
                `)
        const result = query.all()
        return result;
    }

}

module.exports = Image;