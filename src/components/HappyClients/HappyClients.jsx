import React from "react";
import styles from './HappyClients.module.css';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EastIcon from '@mui/icons-material/East';
import ClientCard from './ClientCard/ClientCard';
import Image1 from '../../assets/Ellipse 14.png';
import Image2 from '../../assets/Ellipse 15.png';
import Image3 from '../../assets/Ellipse 16.png';

const HappyClients = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.heading}>What says our happy Clients</div>
        <div>
            <button className={styles.button} style={{backgroundColor:"white"}}><KeyboardBackspaceIcon /></button>
            <button className={styles.button} style={{backgroundColor:"var(--color-primary)"}}><EastIcon /></button>
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"space-between",gap:"30px"}}>
            <ClientCard bgColor="#1D1D1D" image={Image1} name="Jane Cooper"/>
            <ClientCard bgColor="rgba(255, 255, 255, 0.1)" image={Image2} name="Devon Lane"/>
            <ClientCard bgColor="#1D1D1D" image={Image3} name="Robert Fox"/>
        </div>
    </div>
  );
};

export default HappyClients;
