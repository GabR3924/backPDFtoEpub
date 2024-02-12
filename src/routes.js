const { Router } = require('express')
const { readPdf } = require('./controllers.js')

const router = Router();

router.post('/readpdf', readPdf)

exports.router = router; // Exportar el router usando exports
