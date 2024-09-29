import React from 'react'
import styles from "./Feedback.module.css"

const Feedback = ({ good, neutral, bad }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Good: {good}</p>
      <p className={styles.text}>Neutral: {neutral}</p>
      <p className={styles.text}>Bad: {bad}</p>
    </div>
  )
}

export default Feedback