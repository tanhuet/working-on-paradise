import React from "react";
// import google from "../../asses/logo_google.png";
import save from "../../asses/save.png";
import classes from "./google.module.scss";

const Google = (props) => {
  return <img src={props.src} alt="google" className={classes.img1} />;
};
const Save = () => {
  return <img src={save} alt="save" />;
};

export { Google, Save };
