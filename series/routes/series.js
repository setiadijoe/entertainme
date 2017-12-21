const express = require('express');
const router = express.Router();
const series = require('../controllers/series')

router.get('/', series.getAllSeries)
router.post('/', series.postSeri)
router.put('/:id', series.updateSerie)

module.exports = router;