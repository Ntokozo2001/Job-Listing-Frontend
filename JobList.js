import React, { useState } from 'react';

function AddJobForm() {
  // useState hook is used to manage form data
  const [jobDetails, setJobDetails] = useState({
    jobName: '',            // Job name input
    datePosted: '',         // Date posted input
    description: '',        // Description input
    responsibilities: '',   // Responsibilities input
    location: '',           // Location input
    positionType: '',       // Position Type (checkbox)
    requirements: '',       // Requirements input
    salary: ''              // Salary input
  });

  // handleSubmit is called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent page reload
    // Handle job submission logic here
    console.log(jobDetails);
  };

  // The return block contains the form structure
  return (
    <div className="add-job-form">
      <h2>Add a Job</h2>
      <form onSubmit={handleSubmit}>
        
        <label>Job Name*</label>
        <input 
          type="text" 
          required 
          value={jobDetails.jobName} 
          onChange={(e) => setJobDetails({ ...jobDetails, jobName: e.target.value })} 
        />
        
        <label>Date Posted*</label>
        <input 
          type="date" 
          required 
          value={jobDetails.datePosted} 
          onChange={(e) => setJobDetails({ ...jobDetails, datePosted: e.target.value })} 
        />

        <label>Description</label>
        <textarea 
          value={jobDetails.description} 
          onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })}>
        </textarea>

        <label>Responsibilities</label>
        <textarea 
          value={jobDetails.responsibilities} 
          onChange={(e) => setJobDetails({ ...jobDetails, responsibilities: e.target.value })}>
        </textarea>

        <label>Location</label>
        <input 
          type="text" 
          value={jobDetails.location} 
          onChange={(e) => setJobDetails({ ...jobDetails, location: e.target.value })} 
        />

        <label>Position Type</label>
        <input type="checkbox" /> Full-Time
        <input type="checkbox" /> Part-Time
        <input type="checkbox" /> Hybrid
        <input type="checkbox" /> Remote

        <label>Requirements</label>
        <textarea 
          value={jobDetails.requirements} 
          onChange={(e) => setJobDetails({ ...jobDetails, requirements: e.target.value })}>
        </textarea>

        <label>Salary</label>
        <input 
          type="text" 
          value={jobDetails.salary} 
          onChange={(e) => setJobDetails({ ...jobDetails, salary: e.target.value })} 
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddJobForm;
