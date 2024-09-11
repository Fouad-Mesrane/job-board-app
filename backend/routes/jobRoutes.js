const express = require('express');
const { createJob,getAllJobs } = require('../controllers/jobControllers');

// require Job from models

// initiate the router
const router = express.Router();

// get all the job listings

router.get('/', getAllJobs)


// post a new job
router.post('/', createJob)

module.exports = router