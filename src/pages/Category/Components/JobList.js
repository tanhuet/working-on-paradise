import classes from "./JobList.module.scss";
import Wrap from "../../../components/UI/Wrap";
import JobCard from "../../../components/job-card/JobCard";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RecommendedJob from "../../../components/recommended-job/RecommendedJob";

const JobList = (props) => {

  //state
  const [filteredJobs, setFilteredJobs] = useState(props.jobs)

  // dependency
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const filter = queryParams.get('filter')

  //Filter Function
  const filterJob = (jobList, condition) => {
      if (!condition) return jobList
      let jobs = jobList.filter((job) => {
          return job.category.includes(condition)
      })
      jobs = jobs.concat(jobList.filter((job) => {
        return job.companyName.includes(condition)
      }))  
      jobs = jobs.concat(jobList.filter((job) => {
        return job.jobType.includes(condition)
      }))
      jobs = jobs.concat(jobList.filter((job) => {
        return job.skills[0].includes(condition)
      }))
      return jobs
  } 

  //panigator
  const nextPage = () => {
    props.onNextPage()
  }

  const prePage = () => {
    props.onPrePage()
  }

  useEffect(() => {
    let filteredJobs = filterJob(props.jobs, filter)
    setFilteredJobs(filteredJobs)
  }, [filter, props.jobs])

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
              bookmark={job.bookmark}
            />
          ))}
        </div>
        <div className={classes['page-controller']}>
          <button onClick={prePage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
          </svg>
          </button>
          <button onClick={nextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/>
            </svg>
          </button>
        </div>
      </Wrap>
      <div className={classes["recomended-list"]}>
        {props.recomendedJobs.map((item) => (
          <>
            <RecommendedJob
              key={item.id}
              companyName={item.companyName}
              logo={item.logo}
              jobName={item.jobName}
              address={item.address}
              position={item.position}
              salary={item.salary}
              jobType={item.jobType}
              slot={item.slot}
            />
            <div className={classes.break}>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default JobList;
