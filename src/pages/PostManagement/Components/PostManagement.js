import classes from "./PostManagement.module.scss"
import postImg from "../../../asses/post.png"
import HighLightCv from "./HighLightCv"
import HighlightPost from "./HighLightPost";
import { Link } from "react-router-dom"
import Data from "./../../Account/Componets/Data"
import { useEffect } from "react";

const PostManagement = (props) => {

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
        </Data>

      </div>

      <h1 className={classes["tittle-text"]}>IDEAL <span>CVs FOR </span>YOU</h1>

      <div className={classes["job-list"]}>
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
