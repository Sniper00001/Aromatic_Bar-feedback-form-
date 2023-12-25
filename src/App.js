import React, { useState } from "react";
import './App.css';
import Mian from './Components/Mian';
import Nav_bar from './Components/Nav_bar';
import SubmissionList from './Components/Submissions';



function App() {

  const [showMain, setShowMain] = useState(true);

  const handleButtonClick = () => {
    setShowMain(!showMain);
  };

  return (
    <>
     <div className="app-container">
        <Nav_bar />
        {showMain ? <Mian /> : <SubmissionList />}
        <button className="review-btn" onClick={handleButtonClick}>
          {showMain ? "Read More Reviews" : "Go Back"}
        </button>
      </div>
    </>
  );
}

export default App;
