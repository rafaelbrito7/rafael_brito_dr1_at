import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  student: {
    type: String,
    required: true,
  },
  discipline: {
    type: String,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
    default: -1
  }
},
{
  versionKey: false
});

export default mongoose.model('Activity', ActivitySchema);