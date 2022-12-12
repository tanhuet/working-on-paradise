import React from "react";
import filter from "../../asses/filter.png";
import classes from "./Filter.module.scss";

const Filter = () => {
  return <img src={filter} className={classes.filter} alt="filter" />;
};

export default Filter;
