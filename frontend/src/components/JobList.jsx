import React, { useEffect, useState } from "react";
import axios from "axios";
const JobList = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = () => {
      axios
        .get("http://localhost:4000/api/jobs")
        .then((res) => setJobs(res.data))
        .catch(err => console.log(err));
    };

    fetchJobs();
  }, []);
  return (
    <div>
      {jobs.map((job) => (
        <div key={job._id}>
          <h1>{job.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default JobList;
