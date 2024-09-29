import React from 'react';
import styles from "./Options.module.css";
import { useState } from 'react';

const Options = ({updateFeedback}) => {
    const getFeedback = (event) => {
        console.log("hello")
    }
  return (
      <div className={styles.box}>
          <button onClick={getFeedback} type="button">Good</button>
          <button onClick={getFeedback} type="button">Neutral</button>
          <button onClick={getFeedback} type="button">Bad</button>
          {/* <button onClick={getFeedback}type="button">Reset</button> */}
    </div>
  )
}

export default Options