import Activity from '../schemas/Activity';
import MessageBroker from '../MessageBroker';

class ActivityController {
  async store(req, res) {
    const { title, student, discipline } = req.body;

    const activity = await Activity.create({
      title,
      student,
      discipline
    });

    const result = MessageBroker.storeMessage(activity.id);

    return res.json({
      status: true,
      message: 'Activity saved.',
      activity,
      result
    });
  }
}

export default new ActivityController();
