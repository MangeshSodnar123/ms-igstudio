import React from "react";
import styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div style={{fontSize: "54px",fontStyle: "normal",fontWeight: "600",flex:"1"}}>Let’s Introduce Ourself</div>
      <div style={{width: "1px",height: "206px",background: "#6A6A6A"}}></div>
      <div style={{flex:"1"}}>
        <div style={{fontSize: "32px",fontStyle: "normal",fontWeight: "600"}}>Criminal Lawyer</div>
        <div style={{fontSize: "18px",fontStyle: "normal",fontWeight: "500",opacity:"0.3",lineHeight: "162.523%"}}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </div>
      </div>
    </div>
  );
};

export default Introduction;
