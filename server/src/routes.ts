import express from 'express';
import ClassesController from './controllers/ClassesControler';
import ConnectionController from './controllers/ConnectionsControllers';

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionControler = new ConnectionController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionControler.index);
routes.post('/connections', connectionControler.create);

export default routes;
