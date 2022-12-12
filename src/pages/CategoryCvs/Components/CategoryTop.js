import { Fragment } from "react";
import img from "../../../asses/nhansu.png";

import classes from "./CategoryTop.module.scss";
import FilterBar from "./Filterbar/FilterBar";
import HighlightJob from "./HighlightJob2/HighlightJob";
// import { useLocation } from "react-router-dom"

const CategoryTop = (props) => {
  // suggestion word
  let suggestion = "";
  props.entireJobs.forEach((job) => {
    if (!suggestion.includes(job.companyName.toString())) {
      suggestion += job.companyName.toString();
      suggestion += ",";
    }
    if (!suggestion.includes(job.category.toString())) {
      suggestion += job.category.toString();
      suggestion += ",";
    }
    if (!suggestion.includes(job.jobType.toString())) {
      suggestion += job.jobType.toString();
      suggestion += ",";
    }
  });
  suggestion = suggestion.slice(0, -1).split(",");

  return (
    <Fragment>
      <div className={classes.img}>
        <img src={img} className={classes["img-category"]} alt="category" />
      </div>
      <div className={classes["filter-bar"]}>
        <FilterBar filter={suggestion} />
      </div>
      <div className={classes["highligh-job"]}>
        <p className={classes.title}>Exploring Amazing CVs</p>
        <div className={classes.list}>
          {props.jobs.map((job) => (
            <HighlightJob
              key={job.id}
              id={job.id}
              logo={job.logo}
              companyName={job.companyName}
              location={job.location}
              category={job.category}
              jobType={job.jobType}
              skills={job.skills}
              experience={job.experience}
              salary={job.salary}
              age={job.age}
            />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryTop;
