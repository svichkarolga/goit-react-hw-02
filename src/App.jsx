import { useState } from 'react';
import './App.css';
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback"

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

 const updateFeedback = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  
  return (
    <>
      <Description /> 
      <Options updateFeedback={updateFeedback}/>
      <Feedback good={feedback.good} neutral={feedback.neutral} bad={feedback.bad}/>
    </>
  )
}

export default App
