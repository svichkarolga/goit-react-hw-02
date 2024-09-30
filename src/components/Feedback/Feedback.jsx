import React from 'react'
import styles from "./Feedback.module.css"

const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback}) => {

  return (
    <div className={styles.container}>
      <p className={styles.text}>Good: {good}</p>
      <p className={styles.text}>Neutral: {neutral}</p>
      <p className={styles.text}>Bad: {bad}</p>
      <p className={styles.text}>Total: {totalFeedback}</p>
      <p className={styles.text}>Positive: {positiveFeedback}  %</p>
    </div>
  )
}

export default Feedback