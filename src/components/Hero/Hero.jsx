import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/heroImage.png";
import EmailIcon from "@mui/icons-material/Email";
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';

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
          <Input
            className={styles.pill_input}
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
            placeholder="Enter your email address"
            inputProps={{placeholderStyle: styles.placeholder }}
          />
          <button className={styles.search_button}>Let’s Talk</button>
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
