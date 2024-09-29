import React from 'react'
import styles from "./Feedback.module.css"

const Feedback = ({}) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Good: 0</p>
      <p className={styles.text}>Neutral: 0</p>
      <p className={styles.text}>Bad:0</p>
    </div>
  )
}

export default Feedback