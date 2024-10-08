const express = require('express');
const router = express.Router();
const { storeRestaurante, getRestaurantes, getRestauranteById } = require('../controller/restauranteController');

router.post('/store/restaurante', storeRestaurante);
router.get('/get/restaurantes', getRestaurantes);
router.get('/get/restaurante/:id', getRestauranteById);

module.exports = router; 