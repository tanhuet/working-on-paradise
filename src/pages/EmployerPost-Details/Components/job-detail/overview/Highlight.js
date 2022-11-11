import React from "react";
import classes from "./Highlight.module.scss";
import locationImg from "../../../../../asses/bg-google.png";
import { Google, Save } from "../../../../../components/icon/google";

const Highlight = () => {
  return (
    <React.Fragment>
      <div className={classes.underHeader}>
        <img className={classes.img1} src={locationImg} alt=".." />
        <div className={classes.factory}>
          <div className={classes.icon}>
            <Google />
          </div>
          <div className={classes.company1}>
            <div className={classes.info1}>
              <h3>UI/UX Design</h3>
              <p>Google Inc. - California, USA - 2 days ago</p>
            </div>
          </div>
          <button className={classes.button1}>Apply Now</button>
          <div className={classes.icon1}>
            <button className={classes.button2}>
              <Save />
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Highlight;
