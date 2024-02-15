const fs = require('fs');
const PDFParser = require('pdf-parse');
const epub = require('epub-gen');

const readPdf = async (req, res) => {
    const pdfPath = req.body.file;

    console.log('Ruta del archivo PDF:', pdfPath);

    try {
        // const dataBuffer = fs.readFileSync(pdfPath);
        console.log('Contenido del archivo PDF:');

        // Parsear el contenido del PDF usando pdf-parse
        const data = await PDFParser(pdfPath);

        console.log('Texto extraído del archivo PDF:', data.text);

        // Crear un objeto de configuración para el archivo EPUB

        const epubOptions = {
            title: 'PDF Convertido a EPUB', // Título del libro EPUB
            content: [{ title: 'Contenido', data: data.text }], // Contenido del libro EPUB
            author: 'Autor del libro', // Autor del libro EPUB
            output: pdfPath // Ruta de salida del archivo EPUB
        };

        console.log('opciones')

        new epub(epubOptions).promise.then(() => {
            console.log('Done');
            res.download(epubOptions.output); // Devuelve el archivo EPUB como respuesta
        })
        
    } catch (error) {
        console.error('Error al cargar o procesar el PDF:', error);
        res.status(500).json({ error: 'Error al cargar o procesar el PDF' });
    }
};

exports.readPdf = readPdf;