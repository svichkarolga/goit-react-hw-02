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

  const onLeaveFeedback = (option) => {
	setFeedback({
		...feedback,
		[option]: feedback[option] + 1
	});
};

  
  return (
    <>
      <Description /> 
      <Options />
      <Feedback />
    </>
  )
}

export default App
