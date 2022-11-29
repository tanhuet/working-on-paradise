import classes from "./JobList.module.scss";
import Wrap from "../../../components/UI/Wrap";
import JobCard from "../../../components/job-card2/JobCard";
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
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="#6CE0E0"
              class="bi bi-caret-down-square"
              viewBox="0 0 16 16"
            >
              <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0l-4-4.5z" />
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z" />
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
