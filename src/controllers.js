const fs = require('fs')

const readPdf = async (req, res) => {
    try {
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Ocurrió un error' });
    }
}

exports.readPdf = readPdf; 