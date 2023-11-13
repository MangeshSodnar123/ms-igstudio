import React from "react";
import styles from "./LandingPage.module.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Introduction from "../Introduction/Introduction";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import AreaOfPractises from "../AreaOfPractises/AreaOfPractises";
import HappyClients from "../HappyClients/HappyClients";
import OurTeam from "../OurTeam/OurTeam";
import FAQ from "../FAQ/FAQ";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";

const LandingPage = () => {

  const button = (<button className={styles.button}>Contact Now</button>);

  return (
    <>
      <div className={styles.wrapper1}>
        <Header>{button}</Header>
        <Hero />
      </div>
      <div className={styles.wrapper2}>
        <Introduction />
        <WhyChooseUs />
        <AreaOfPractises />
        <HappyClients />
        <OurTeam />
        <FAQ />
        <Subscribe />
      </div>
      <div className={styles.wrapper1} style={{ height: "30vh" }}>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
