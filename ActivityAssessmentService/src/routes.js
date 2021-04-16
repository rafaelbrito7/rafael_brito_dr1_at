import { Router } from 'express';
import ActivityController from './controllers/activity.controller';

const routes = Router();

routes.get('/activityAssessment', ActivityController.read);
routes.put('/activityAssessment', ActivityController.update);

export default routes;