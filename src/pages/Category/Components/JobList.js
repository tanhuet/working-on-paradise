import classes from "./JobList.module.scss";
import Wrap from "../../../components/UI/Wrap";
import JobCard from "../../../components/job-card/JobCard";
import RecomendedJob from "../../JobDetails/Components/recomended-job/RecomendedJob";

const JobList = (props) => {
  return (
    <div className={classes.main}>
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
      <div className={classes["recomended-list"]}>
        {props.recomendedJobs.map((item) => (
          <RecomendedJob
            key={item.id}
            companyName={item.companyName}
            logo={item.logo}
            jobs={item.jobs}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
