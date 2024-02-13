const fs = require('fs')
const pdfParser = require('pdf-parser');

const readPdf = async (req, res) => {

    const pdfPath = req.body.file;

    fs.readFile(pdfPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo PDF:', err);
            res.status(500).json({ error: 'Error al leer el archivo PDF' });
            return;
        }

        // El contenido del archivo PDF está en el buffer "data"
        // Aquí es donde comenzarías a analizar el contenido del archivo PDF
        // y extraer la información que necesitas
        console.log('Contenido del archivo PDF:');
        return res.status(200).json({data})
        // Aquí puedes realizar cualquier procesamiento adicional con "data"
        // Por ejemplo, puedes llamar a una función para analizar el PDF
        // parsePdf(data);
    });

}
exports.readPdf = readPdf; 