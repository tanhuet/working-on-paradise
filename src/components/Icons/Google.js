import React from "react";

import save from "../../asses/save.png";
import classes from "./Google.module.scss";
import locationImg from "../../asses/bg-paradise.PNG";
import ReactImageFallback from "react-image-fallback";

const Google = (props) => {
  return <ReactImageFallback src={props.src} alt="google" className={classes.img1} fallbackImage={locationImg} />;
};
const Save = () => {
  return <img src={save} alt="save" />;
};

export { Google, Save };
