const express = require('express');
const router = express.Router();

const numberWordsController = require('../controllers/numberWordsController');

router.get('/', numberWordsController.get_words_from_numbers);

module.exports = router;