import classes from "./IdeaPositionFooter.module.scss";
import HighlightJob from "../highlight-job/HighlightJob";

function IdeaPositionFooter(props) {
  return (
    <div className={classes["body-bottom"]}>
      <div className={classes["title"]}>
        <span style={{ color: "#FFCC00" }}>IDEAL </span>
        <span>POSITION FOR </span>
        <span style={{ color: "#FFCC00" }}>YOU</span>
      </div>

      <div className={`row ${classes["idea-job"]}`}>
        {props.jobs.map((job) => (
          <HighlightJob
            // class = {classes.red}
            logo={job.logo}
            companyName={job.companyName}
            location={job.location}
            category={job.category}
            jobType={job.jobType}
            skills={job.skills}
            experience={job.experience}
            minSalary={job.minSalary}
            maxSalary={job.maxSalary}
          />
        ))}
        {props.jobs.map((job) => (
          <HighlightJob
            // class = {classes.red}
            logo={job.logo}
            companyName={job.companyName}
            location={job.location}
            category={job.category}
            jobType={job.jobType}
            skills={job.skills}
            experience={job.experience}
            minSalary={job.minSalary}
            maxSalary={job.maxSalary}
          />
        ))}
        {props.jobs.map((job) => (
          <HighlightJob
            // class = {classes.red}
            logo={job.logo}
            companyName={job.companyName}
            location={job.location}
            category={job.category}
            jobType={job.jobType}
            skills={job.skills}
            experience={job.experience}
            minSalary={job.minSalary}
            maxSalary={job.maxSalary}
          />
        ))}
      </div>
    </div>
  );
}

export default IdeaPositionFooter;
