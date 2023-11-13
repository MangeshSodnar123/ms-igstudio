import React from "react";
import Header from "../Header/Header";
import styles from "./Footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <div>
      <Header>
        <div className={styles.wrapper1}>
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
      </Header>
      <div className={styles.wrapper}>
        <div>© 2020 Acme. All right reserved.</div>
        <div>Privacy Policy</div>
        <div>Terms of Service</div>
      </div>
    </div>
  );
};

export default Footer;
