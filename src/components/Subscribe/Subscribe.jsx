import React from 'react';
import styles from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.heading}>Subscribe Our Newsletter</div>
        <div className={styles.wrapper1}>
            <input type='text' placeholder='Name:' className={styles.input_box} style={{borderRadius: "8px 0px 0px 8px"}}/>
            <input type='text' placeholder='Enter your Email' className={styles.input_box}/>
            <button className={styles.button}>SEND</button>
        </div>

    </div>
  )
}

export default Subscribe