import React from "react";
import styles from "./OurTeam.module.css";
import Image1 from "../../assets/Ellipse 17.png";
import Image2 from "../../assets/Ellipse 18.png";
import Image3 from "../../assets/Ellipse 19.png";
import Image4 from "../../assets/Ellipse 20.png";
import Image5 from "../../assets/Ellipse 21.png";
import Image6 from "../../assets/Ellipse 22.png";

const TeamCard = ({ image, name, cases, bgGround }) => {
    const cardStyle = {
      backgroundColor: bgGround ? "#e3b748" : "",
    };
  
    const textStyles = {
      color: bgGround ? "black" : "white", 
    };
  
    return (
      <div className={styles.team_card} style={cardStyle}>
        <div>
          <img src={image} alt="team member" />
        </div>
        <div style={{ marginLeft: "20px", ...textStyles }}>
          <div className={styles.name}>{name}</div>
          <div className={styles.case}>{cases} cases</div>
        </div>
      </div>
    );
  };
  

const OurTeam = () => {
  return (
    <div>
      <div className={styles.heading}>Our Team</div>
      <div className={styles.wrapper}>
        <TeamCard image={Image2} name="Danial Def" cases={301} />
        <TeamCard image={Image1} name="Sanfole" cases={850} bgGround={true} />
        <TeamCard image={Image3} name="Cesforila" cases={470} />
        <TeamCard image={Image4} name="Colleen" cases={180} />
        <TeamCard image={Image5} name="Haldone" cases={212} />
        <TeamCard image={Image6} name="Nik Jeo" cases={350} />
      </div>
    </div>
  );
};

export default OurTeam;
