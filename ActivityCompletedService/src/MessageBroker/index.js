require('dotenv').config();
import { connect } from 'amqplib';

const queue = 'activities';
let channel

class MessageBroker {
  constructor() {
    (async () => await this.connect())();
  }

  async connect() {
    const connection = await connect(process.env.AMQP_URL);
    channel = await connection.createChannel();
  }

  storeMessage(json) {
    try {
      channel.assertQueue(queue)
      channel.sendToQueue(queue, Buffer.from(json))  
      return true;
    } catch (error) {
      return error.message;
    }
  }
}

export default new MessageBroker();