const express = require('express');
const UserController = require('./controllers/UserController');
const HistoricoController = require('./controllers/HistoricoController');

const routes = express.Router();

routes.get('/user', UserController.getUsuarios);
routes.get('/user/:userId', UserController.getUsuarioById);
routes.post('/user/:userId/alterar', UserController.updateUsuario);
routes.post('/user', UserController.createUsuario);
routes.post('/user/:userId/excluir', UserController.deleteUsuario);

routes.get('/historico/:historicoId', HistoricoController.getHistoricoById);
routes.post('/historico', HistoricoController.createHistorico);

module.exports = routes;