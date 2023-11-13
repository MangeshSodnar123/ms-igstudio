import React from "react";
import styles from "./Card.module.css";
import Button from '@mui/material/Button';
import Gift from '../../../assets/icons/Gift.png';

const Card = ({bgColor,successRate}) => {
  return (
    <div className={styles.card} style={{backgroundColor:bgColor}}>
      <div className={styles.image_box}>
        <img src={Gift} />
      </div>
      <div style={{fontSize: "24px",marginBlock:"20px"}}>{successRate}% Success Rate</div>
      <div className={styles.card_text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </div>
      <button className={styles.button}>
          Read More
        </button>
    </div>
  );
};

export default Card;
