import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/heroImage.png";
import Mail from "../../assets/Message 35.png";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div style={{ flex: 1 }}>
        <div className={styles.heading}>
          You don’t have to Fight them Alone.
        </div>
        <div
          style={{
            fontSize: "18px",
            fontWeight: 500,
            opacity: 0.4,
            marginBlock: "50px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget,
          hac massa gravida arcu interdum proin curae.
        </div>

        <div className={styles.input_container}>
          <div className={styles.mail}>
            <img src={Mail} alt="Mail" />
          </div>
          <input
            type="email"
            placeholder="Enter your eamil address"
            className={styles.pill_input}
          />
          <div className={styles.search_button}>Let’s Talk</div>
        </div>
      </div>

      <div className={styles.hero_image_background}>
        <img
          src={HeroImage}
          alt="heroImage"
          style={{ position: "absolute", bottom: "0px", left: "25px" }}
        />
      </div>
    </div>
  );
};

export default Hero;
