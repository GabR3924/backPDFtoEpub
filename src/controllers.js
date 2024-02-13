const fs = require('fs');
const PDFParser = require('pdf-parse');

const readPdf = async (req, res) => {
    const pdfPath = req.body.file;

    console.log('Ruta del archivo PDF:', pdfPath);

    try {
        // const dataBuffer = fs.readFileSync(pdfPath);
        console.log('Contenido del archivo PDF:');

        // Parsear el contenido del PDF usando pdf-parse
        const data = await PDFParser(pdfPath);

        console.log('Texto extraído del archivo PDF:', data.text);

        // Aquí puedes procesar el texto como desees
        // Por ejemplo, puedes enviarlo como respuesta JSON
        res.status(200).json({ text: data.text });
    } catch (error) {
        console.error('Error al cargar o procesar el PDF:', error);
        res.status(500).json({ error: 'Error al cargar o procesar el PDF' });
    }
};

exports.readPdf = readPdf;
