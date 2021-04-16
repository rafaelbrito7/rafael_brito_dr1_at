import { Router } from 'express';
import ActivityController from './controllers/activity.controller';

const routes = Router();

routes.post('/activityCompleted', ActivityController.store);

export default routes;