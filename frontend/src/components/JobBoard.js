import React, { useState, useEffect } from "react";
import axios from "axios";

function JobBoard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get("/api/jobs").then((response) => setJobs(response.data));
  }, []);

  return (
    <div>
      <h1>Job Board</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobBoard;
