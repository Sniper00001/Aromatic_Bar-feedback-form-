import React, { useEffect, useState } from "react";
import '../App.css';

const SubmissionList = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    
    const storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(storedSubmissions);
  }, []);


  const handleEraseData = () => {
    localStorage.removeItem("submissions");
    setSubmissions([]);
  };

  return (
    <div className="main_div animation">

      <h2>Submission List</h2>
      <p>Total Entries: {submissions.length}</p>
      <button onClick={handleEraseData}>Erase All Data</button>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
         
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Last_Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>ServiceRating</th>
              <th>BeverageQuality</th>
              <th>CleanlinessRating</th>
              <th>OverallExperienceRating</th>
              <th>Comments</th>
              
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index}>
                <td>{submission.name}</td>
                <td>{submission.lastName}</td>
                <td>{submission.email}</td>
                <td>{submission.phone}</td>
                <td>{submission.serviceRating}</td>
                <td>{submission.beverageQuality}</td>
                <td>{submission.cleanlinessRating}</td>
                <td>{submission.overallExperienceRating}</td>
                <td>{submission.comments}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SubmissionList;
