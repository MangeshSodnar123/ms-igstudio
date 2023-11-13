import React from 'react';
import styles from './WhyChooseUs.module.css';
import Card from './Card/Card';


const WhyChooseUs = () => {
  return (
    <div className={styles.wrapper}>
        <div style={{fontSize: "54px", textAlign:"center",marginBottom:"100px"}}>Why Choose us?</div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <Card bgColor="#1D1D1D" successRate={98}/>
            <Card bgColor="rgba(255, 255, 255, 0.1)" successRate={100}/>
            <Card bgColor="#1D1D1D" successRate={100}/>
        </div>
    </div>
  )
}

export default WhyChooseUs