import React from "react";
import styles from "./FAQ.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';

function ExpandMoreIcon() {
  return <div className={styles.expand_more}><AddIcon /></div>;
}

function BasicAccordion() {
  return (
    <div>
      <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.accordian_heading}>
            Do I need a personal injury report?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordion_summary}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.accordian_heading}>
            How much is my case worth?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordion_summary}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.accordian_heading}>
            What should I do right after car accidect
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordion_summary}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordian}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={styles.accordian_heading}>
            How much is my case worth?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={styles.accordion_summary}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
            mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
            officia consequatduis enim velit mollit Exer.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const FAQ = () => {
  return (
    <div>
      <div className={styles.heading}>FAQ</div>
      <div style={{ display: "flex" }}>
        <div
          className={styles.faded_text}
          style={{ flex: 1, marginTop: "20px" }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </div>
        <div style={{ flex: 1 }}>
          <BasicAccordion />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
