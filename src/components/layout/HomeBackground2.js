import { Fragment } from "react";
import classes from "./HomeBackground2.module.scss";

const HomeBackground = () => {
  return (
    <Fragment>
      <div className={`${classes.background} ${classes["background-first"]}`} />
      <div
        className={`${classes.background} ${classes["background-second"]}`}
      />
      <div className={`${classes.background} ${classes["background-third"]}`} />
      <div
        className={`${classes.background} ${classes["background-fourth"]}`}
      />
    </Fragment>
  );
};

export default HomeBackground;
