const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);

route.get('/add-news', services.add_news)

route.get('/update-news', services.update_news)

// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route