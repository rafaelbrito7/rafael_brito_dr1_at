import Activity from '../schemas/Activity';
import MessageBroker from '../MessageBroker';

class ActivityController {
  async read(req, res) {
    const id = await MessageBroker.readMessage();
    
    return res.json({
      status: true,
      message: id,
    })
  }

  async update(req, res) {
    const { id, grade } = req.body;
    
    const activity = await Activity.findById(id);

    if (!activity) {
      return res.json({
        status: false,
        message: 'Activity not found.'
      })
    }
    
    await Activity.updateOne(
      {
        _id: id
      },
      {
        grade
      }
    );

    return res.json({
      status: true,
      message: 'Activity updated with success.',
    })
  }
}

export default new ActivityController();