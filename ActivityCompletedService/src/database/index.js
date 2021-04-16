require('dotenv').config();
import mongoose from 'mongoose';

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    const user = process.env.DB_USER;
    const password = process.env.DB_PASS;
    this.mongoConnection = mongoose.connect(`mongodb+srv://${user}:${password}@personalprojectscluster.jyth1.mongodb.net/completed_activites?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

export default new Database();
