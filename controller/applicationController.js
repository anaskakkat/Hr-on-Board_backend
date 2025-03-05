import Application from '../models/Application.js';
import parseResume from '../utils/parseResume.js';

export const applyForJob = async (req, res) => {
  try {
    const { jobId } = req.body;
    const resumeUrl = req.file.path;
    const parsedFields = await parseResume(resumeUrl); // Call resume parsing utility

    const application = new Application({ 
      candidateId: req.user.userId, 
      jobId, 
      resumeUrl, 
      parsedFields 
    });

    await application.save();
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: "Error applying for job", error });
  }
};
