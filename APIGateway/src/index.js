import express from 'express';
import httpProxy from 'express-http-proxy';
import { ACTIVITY_COMPLETED_URL, ACTIVITY_ASSESSMENT_URL} from './URLs';

const app = express();
const port = 3000;
const host = '0.0.0.0';

const activityCompletedServiceProxy = httpProxy(ACTIVITY_COMPLETED_URL);
const activityAssessmentServiceProxy = httpProxy(ACTIVITY_ASSESSMENT_URL);

app.use('/activityCompleted', activityCompletedServiceProxy());
app.use('/activityAssessment', activityAssessmentServiceProxy());

app.listen(port, host, () => console.log(`Local host listening on port ${port}!`));