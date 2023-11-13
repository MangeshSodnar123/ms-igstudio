import React from "react";
import styles from "./AreaOfPractises.module.css";
import Rect3652 from "../../assets/Rectangle 3652.png";
import Rect3651 from "../../assets/Rectangle 3651.png";
import Rect3653 from "../../assets/Rectangle 3653.png";
import Rect3654 from "../../assets/Rectangle 3654.png";
import Rect3656 from "../../assets/Rectangle 3656.png";
import Rect3655 from "../../assets/Rectangle 3655.png";

const AreaOfPractises = () => {
  return (
    <div>
      <div className={styles.heading}>Area of Practices</div>
      <div
        className={styles.grid_of_cards}
        style={{ color: "white", textAlign: "center" }}
      >
        <div className={`${styles.card} ${styles.grid_span_2}`}>
          <img src={Rect3652} alt="img" className={styles.grid_image} />
          <p className={styles.grid_card_text}>BUSINESS LAW</p>
        </div>
        <div className={styles.card}>
          <img src={Rect3651} alt="img" className={styles.grid_image} />
          <p className={styles.grid_card_text}>Partnership LAW</p>
        </div>

        <div className={`${styles.card} ${styles.middle_square}`}>
          <img src={Rect3653} alt="img" className={styles.grid_image} />
          <p className={styles.grid_card_text}>REAL ESTATE LAW</p>
        </div>
        <div className={`${styles.card} ${styles.grid_span_2}`}>
          <img src={Rect3654} alt="img" className={styles.grid_image} />
          <p className={styles.grid_card_text}>BUSINESS LAW</p>
        </div>

        <div className={`${styles.card} ${styles.grid_span_2}`}>
          <img src={Rect3656} alt="img" className={styles.grid_image} />
          <p className={styles.grid_card_text}>LANDLORD DISPUTES</p>
        </div>
        <div className={styles.card}>
          <img src={Rect3655} alt="img" className={styles.grid_image} />
          <p className={styles.grid_card_text}>ELDER ABUSE</p>
        </div>
      </div>
    </div>
  );
};

export default AreaOfPractises;
