// models/Application.js
import { Schema, model } from 'mongoose';

const applicationSchema = new Schema({
  candidateId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  jobId: { type: Schema.Types.ObjectId, ref: 'Job', required: true },
  resumeUrl: { type: String, required: true },
  parsedFields: { type: Object }, // Store parsed resume data
});

export default model('Application', applicationSchema);