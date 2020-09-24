import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  document: {
    type: String,
    required: true,
    min: 11,
    max: 11,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model('user', userSchema);
