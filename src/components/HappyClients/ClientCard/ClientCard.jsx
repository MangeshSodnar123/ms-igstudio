import React from "react";
import styles from "./ClientCard.module.css";
import Button from '@mui/material/Button';


const ClientCard = ({bgColor,image,name}) => {
  return (
    <div className={styles.card} style={{backgroundColor:bgColor}}>
      <div className={styles.image_box}>
        <img src={image} alt="client"/>
      </div>
      <div className={styles.name}>{name}</div>
      <div style={{fontSize: "14px",fontWeight: "400"}}>Ceo of Hunt</div>
      <div className={styles.card_text}>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequatduis enim velit mollit Exer.
      </div>
    </div>
  );
};

export default ClientCard;
