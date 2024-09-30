import React from 'react';
import styles from "./Options.module.css";
import { useState } from 'react';

const Options = ({updateFeedback, resetFeedback, totalFeedback}) => {
    const getFeedback = (type) => {
        updateFeedback(type)
    }
  return (
      <div className={styles.box}>
          <button onClick={() => getFeedback("good")} type="button">Good</button>
          <button onClick={() => getFeedback("neutral")} type="button">Neutral</button>
          <button onClick={() => getFeedback("bad")} type="button">Bad</button>
          {totalFeedback > 0 && (<button onClick={resetFeedback} type="button">Reset</button>)}
    </div>
  )
}

export default Options