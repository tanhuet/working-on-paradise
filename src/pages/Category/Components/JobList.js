import classes from "./JobList.module.scss";
import Wrap from "../../../components/UI/Wrap";
import JobCard from "../../../components/JobCard/JobCard";
import RecommendedJob from "../../../components/RecommendedJob/RecommendedJob";

const JobList = (props) => {

  //panigator
  const nextPage = () => {
    props.onNextPage()
  }

  const prePage = () => {
    props.onPrePage()
  }

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
        <div className={classes['page-controller']} >
          <button onClick={prePage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
          </button>
          <button onClick={nextPage}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
            <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          </button>
        </div>
      </Wrap>
      <div className={classes["recomended-list"]}>
        {props.recomendedJobs.map((item) => (
          <div key={item.id}>
            <RecommendedJob
              key={item.id}
              id={item.id}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
