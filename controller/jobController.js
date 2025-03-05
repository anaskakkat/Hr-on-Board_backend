import Job from '../models/Job.js';

export const createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
  }
};

export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ status: 'open' });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching jobs", error });
  }
};
