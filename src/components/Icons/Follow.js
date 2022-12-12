import React from "react";
import followImg from "../../asses/follow.png";
import classes from "./Follow.module.scss";

const FollowIcon = () => {
  return <img src={followImg} className={classes.follow} alt="follow" />;
};

export default FollowIcon;
