const express = require('express');
// const { celebrate, Segments, Joi } = require('celebrate');

// const CarController = require('./controllers/CarController');
const CarController = require('./controllers/CarController');
const BrandController = require('./controllers/BrandController');
const ModelController = require('./controllers/ModelController');
// const IncidentsController = require('./controllers/IncidentsController');
// const ProfileController = require('./controllers/ProfileController');
// const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.get('/cars/list', CarController.index);
routes.post('/cars', CarController.create);
routes.get('/brands/list', BrandController.index);
routes.get('/models/list', ModelController.index);

// routes.get('/ongs', OngController.index);
// routes.post('/ongs', celebrate({
//     [Segments.BODY]: Joi.object().keys({
//         name: Joi.string().required(),
//         email: Joi.string().required().email(),
//         whatsapp: Joi.string().required().min(12).max(13),
//         city: Joi.string().required(),
//         uf: Joi.string().required().length(2),
//     })
// }), OngController.create);

// routes.get('/profile', celebrate({
//     [Segments.HEADERS]: Joi.object({
//         authorization: Joi.string().required(),
//     }).unknown()
// }), ProfileController.index);

// routes.post('/incidents', IncidentsController.create);

// routes.get('/incidents', celebrate({
//     [Segments.QUERY]: Joi.object().keys({
//         page: Joi.number(),
//     })
// }), IncidentsController.index);

// routes.delete('/incidents/:id', celebrate({
//     [Segments.PARAMS]: Joi.object().keys({
//         id: Joi.number().required(),
//     })
// }), IncidentsController.delete);

module.exports = routes;
