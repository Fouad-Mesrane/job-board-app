const express = require('express');
const { createJob,getAllJobs,getSingleJob,updateJob, deleteJob } = require('../controllers/jobControllers');

// require Job from models

// initiate the router
const router = express.Router();

// get all the job listings

router.get('/', getAllJobs)


// post a new job
router.post('/', createJob)

//get single job
router.get('/:id',getSingleJob)

// update a job

router.patch ('/:id', updateJob)
//delete a job
router.delete ('/:id', deleteJob)

module.exports = router