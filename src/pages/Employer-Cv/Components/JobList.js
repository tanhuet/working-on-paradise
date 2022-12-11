import classes from "./JobList.module.scss";
import Wrap from "../../../components/UI/Wrap";
import JobCard from "../../../components/JobCard/JobCard";

const JobList = (props) => {
  return (
    <Wrap className={classes["job-list"]}>
      <div className={classes.title}>
        <p>
          And 100+ Jobs Here <br />
          <span>Investigate your potential specialty profession</span>.
        </p>
      </div>
      <div className={classes.list}>
        {props.jobs.map((job) => (
          <JobCard
            key={job.id}
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
    </Wrap>
  );
};

export default JobList;
