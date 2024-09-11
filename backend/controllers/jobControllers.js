const mongoose = require("mongoose");
const Job = require("../models/Job");

// create a job

const createJob = async (req, res) => {
  const { title, des, salary, location } = req.body;
  try {
    const job = await Job.create({ title, des, salary, location });
    res.status(200).json(job);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


// get all jobs 
const getAllJobs = async (req,res) => {
   
        const jobs = await Job.find({})
        return res.status(200).json(jobs)
}

module.exports = {createJob, getAllJobs}