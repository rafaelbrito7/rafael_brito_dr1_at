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

  async readMessage() {
    try {
      let content;

      channel.assertQueue(queue)
      await channel.consume(queue, (message) => {
        content = message.content.toString()
      });

      return content;  
    } catch (error) {
      return error.message;
    }
  }
}

export default new MessageBroker();