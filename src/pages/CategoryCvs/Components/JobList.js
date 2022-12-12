import classes from "./JobList.module.scss";
import Wrap from "../../../components/UI/Wrap";
import JobCard from "./JobCard2/JobCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const JobList = (props) => {
  //state
  const [filteredJobs, setFilteredJobs] = useState(props.jobs);

  // dependency
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get("filter");

  //Filter Function
  const filterJob = (jobList, condition) => {
    if (!condition) return jobList;
    let jobs = jobList.filter((job) => {
      return job.category.includes(condition);
    });
    jobs = jobs.concat(
      jobList.filter((job) => {
        return job.companyName.includes(condition);
      })
    );
    jobs = jobs.concat(
      jobList.filter((job) => {
        return job.jobType.includes(condition);
      })
    );
    jobs = jobs.concat(
      jobList.filter((job) => {
        return job.skills[0].includes(condition);
      })
    );
    return jobs;
  };

  //panigator
  const nextPage = () => {
    props.onNextPage();
  };

  // const prePage = () => {
  //   props.onPrePage()
  // }

  useEffect(() => {
    let filteredJobs = filterJob(props.jobs, filter);
    setFilteredJobs(filteredJobs);
  }, [filter, props.jobs]);

  return (
    <div className={classes.main}>
      <Wrap className={classes["job-list"]}>
        <div className={classes.title}>
          <p>
            And 100+ CVs Here <br />
            <span>Investigate your potential specialty profession</span>.
          </p>
        </div>
        <div className={classes.list}>
          {filteredJobs.map((job) => (
            <JobCard
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
            />
          ))}
        </div>
        <div className={classes["page-controller"]}>
          {/* <button onClick={prePage}>Previous</button> */}
          <button onClick={nextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="#48CCCD" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </button>
        </div>
      </Wrap>
      {/* <div className={classes["recomended-list"]}>
        {props.recomendedJobs.map((item) => (
          <>
            <RecomendedJob
              key={item.id}
              companyName={item.companyName}
              logo={item.logo}
              jobs={item.jobs}
            />
            <div className={classes.break}>
            </div>
          </>
        ))}
      </div> */}
    </div>
  );
};

export default JobList;
