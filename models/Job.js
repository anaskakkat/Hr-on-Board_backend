import { Schema, model } from 'mongoose';

const jobSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed'], default: 'open' },
});

export default model('Job', jobSchema);