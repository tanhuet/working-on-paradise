import classes from "./PostManagement.module.scss"
import postImg from "../../../asses/post.png"
import HighLightCv from "./HighLightCv"
import HighlightPost from "./HighLightPost";
import { Link } from "react-router-dom"
import Data from "./../../Account/Componets/Data"
import { useState } from "react";

const PostManagement = (props) => {

  const [next, setNext] = useState(true)

  const nextList = () => {
     if (props.jobs.length < 5) {
       setNext(false);
     }
    props.onNextList();
  };

  const preList = () => {
    props.onPreList();
    if (props.jobs.length <= 5) {
      setNext(false);
    }
    setNext(true);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes["container-img"]}>
          <img src={postImg} alt="postImg" />
        </div>
        <div className={classes["container-text"]}>
          <div className={classes.text}>Manage your posts and look for potential CVs</div>
          <div className={classes.makeup}>
            <Link to="/addpost">
              <button className={classes.btn}>Post a Job</button>
            </Link>
          </div>
        </div>
      </div>

      <div className={classes["post-list"]}>
        <div className={classes.title}>
          Created posts
          <Link to="/addpost" className={classes.add}>
            <i className="fa fa-plus"></i>
          </Link>
        </div>
        <Data className={classes.list}>
          {props.jobs.map((job) => (
            <HighlightPost
              key={job.id}
              id={job.id}
              logo={job.logo}
              jobName={job.jobName}
              company={job.companyName}
              positions={job.positions}
              location={job.location}
              category={job.category}
              typeOfJob={job.jobType}
              skills={job.skills}
              experience={job.experience}
              candidates={job.candidates}
              salary={job.salary}
            />
          ))}
          <div className={classes.listButton}>
            <button onClick={preList}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </button>
            <button onClick={nextList} disabled={next ? false : true}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z" />
                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </Data>

      </div>

      <h1 className={classes["tittle-text"]}>IDEAL <span>CVs FOR </span>YOU</h1>

      <div className={classes["cv-list"]}>
        {props.profiles.map((profile) => (
          <HighLightCv
            key={profile.id}
            id={profile.id}
            avatar={profile.avatar}
            userName={profile.userName}
            experience={profile.experience}
            age={profile.age}
            salary={profile.salary}
            jobType={profile.jobType}
            skills={profile.skills}
          />
        ))}
      </div>
    </>

  );
};

export default PostManagement;
