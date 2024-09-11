const mongoose = require("mongoose");
const Job = require("../models/Job");
const { json } = require("express");

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
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  if(!jobs) {
    return res.status(404).json({error : 'Page Not Found'})
  }
  return res.status(200).json(jobs);
};

//get a single job

const getSingleJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No Such Job" });
  }
  const job = await Job.findById(id);
  if (!job) {
    return res.status(404).json({ error: "No Such Job" });
  }
  if (job) {
    return res.status(200).json(job);
  }
};

//update a job
const updateJob = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Job" });
  }

  const job = await Job.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!job) {
    return res.status(404).json({ error: "no such job" });
  }
  res.status(200).json(job);
};

// delete a job

const deleteJob = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such Job" });
  }

  const job = await Job.findOneAndDelete({ _id: id });

  if (!job) {
    return res.status(400).json({ error: "No such Job" });
  }
  res.status(200).json(json);
};

module.exports = { createJob, getAllJobs, getSingleJob, updateJob,deleteJob };
