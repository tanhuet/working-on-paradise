import classes from "./PostManagement.module.scss"
import postImg from "../../../asses/post.png"
import HighLightCv from "./HighLightCv"
import HighlightPost from "./HighLightPost";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const PostManagement = (props) => {
  const cv = props.cvs[0]
  const [jobMine, setJobMine] = useState(props.jobs)

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const filter = queryParams.get('filter')

  const jobMines = (jobList, condition) => {
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
  
  useEffect(() => {
    let filteredJobs = jobMines(props.jobs, filter)
    setJobMine(filteredJobs)
  }, [filter, props.jobs])
  return (
    <>
      <div className={classes.container}>
        <div className={classes["container-img"]}>
          <img src={postImg} alt="postImg" />
        </div>
        <div className={classes["container-text"]}>
          <div className={classes.text}>Manage your posts and look for potential CVs</div>
          <Link to="/addpost">
            <button className={classes.btn}>Post a Job</button>
          </Link>
        </div>
      </div>

      <div className={classes["post-list"]}>
        <div className={classes.title}>
          Created posts
          <Link to="/addpost" className={classes.add}>
            <i className="fa fa-plus"></i>
          </Link>

        </div>
        <div className={classes.list}>
          {jobMine.map((job) => (
            <HighlightPost
              key={job.id}
              logo={job.logo}
              company={job.jobName}
              //location={job.location}
              //category={job.category}
              typeOfJob={job.jobType}
              skills={job.skills}
              candidates={job.experience}
              salary={job.salary}
            />
          ))}
        </div>
      </div>

      <h1 className={classes["tittle-text"]}>IDEAL <span>CVs FOR </span>YOU</h1>

      <div className={classes["job-list"]}>
        <HighLightCv
          avatar={cv.avatar}
          userName={cv.userName}
          experience={cv.experience}
          age={cv.age}
          minSalary={cv.minSalary}
          maxSalary={cv.maxSalary}
          jobType={cv.jobType}
          skills={cv.skills}
        />
        <HighLightCv
          avatar={cv.avatar}
          userName={cv.userName}
          experience={cv.experience}
          age={cv.age}
          minSalary={cv.minSalary}
          maxSalary={cv.maxSalary}
          jobType={cv.jobType}
          skills={cv.skills}
        />
        <HighLightCv
          avatar={cv.avatar}
          userName={cv.userName}
          experience={cv.experience}
          age={cv.age}
          minSalary={cv.minSalary}
          maxSalary={cv.maxSalary}
          jobType={cv.jobType}
          skills={cv.skills}
        />
      </div>
    </>

  );
};

export default PostManagement;
