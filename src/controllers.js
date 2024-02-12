const fs = require('fs')
const PDFParser = require('pdf-parser');

const readPdf = async (req, res) => {
    const filePath = req.body.file;

    try {
        console.log('aquiestas')

        // Leer el archivo PDF (reemplaza 'ruta/al/archivo.pdf' con la ruta real)
        const dataBuffer = fs.readFileSync(filePath);
        console.log('fiel', filePath)
        // Parsear el contenido del PDF
        PDFParser(dataBuffer)
        .then(pdf => {
            // El contenido del PDF está disponible en pdf.text
            const textoPdf = pdf.text;

            // Enviar el texto del PDF como respuesta
            return res.status(200).json({ texto: textoPdf });
        })
        .catch(error => {
            console.error('Error al parsear el PDF:', error);
            return res.status(500).json({ error: 'Ocurrió un error al leer el PDF' });
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error' });
    }
}

exports.readPdf = readPdf; 