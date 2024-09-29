import React from 'react';
import styles from "./Options.module.css";
import { useState } from 'react';

const Options = () => {
    const getFeedback = (event) => {
        console.log("hello")
    }
  return (
      <div className={styles.box}>
          <button onClick={getFeedback} className={styles.button} type="button">Good</button>
          <button onClick={getFeedback} type="button">Neutral</button>
          <button onClick={getFeedback} type="button">Bad</button>
          {/* <button onClick={getFeedback}type="button">Reset</button> */}
    </div>
  )
}

export default Options