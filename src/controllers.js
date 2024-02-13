const fs = require('fs');
const PDFParser = require('pdf-parse');
const Epub = require('epub-gen');

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

        const generateEpub = new Promise((resolve, reject) => {
            new Epub(epubOptions, error => {
                if (error) {
                    console.error('Error al generar el archivo EPUB:', error);
                    reject(error);
                } else {
                    console.log('Archivo EPUB generado exitosamente');
                    resolve();
                }
            });
        });

        console.log('esperando')
        // Esperar a que se genere el archivo EPUB antes de responder
        await generateEpub;

        console.log('finalizado')
        return res.status(200).json({ message: 'Archivo EPUB generado exitosamente' });

        
    } catch (error) {
        console.error('Error al cargar o procesar el PDF:', error);
        res.status(500).json({ error: 'Error al cargar o procesar el PDF' });
    }
};

exports.readPdf = readPdf;
