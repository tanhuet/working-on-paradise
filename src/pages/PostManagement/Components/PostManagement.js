import classes from "./PostManagement.module.scss"
import postImg from "../../../asses/post.png"
import HighLightCv from "./HighLightCv"
import HighlightPost from "./HighLightPost";
import {Link} from "react-router-dom"

const PostManagement = (props) => {
  const cv = props.cvs[0]
  const post = props.posts[0]
  return (
    <>
        <div className={classes.container}>
          <div className={classes["container-img"]}>
            <img src={postImg} alt="postImg" />
          </div>
          <div className={classes["container-text"]}>
            <div className={classes.text}>Manage your posts and look for potential CVs</div>
              <Link>
                <button className={classes.btn}>Post a Job</button>
              </Link>
          </div>
        </div>
        
        <div className={classes["post-list"]}>
          <div className={classes.title}>
            Created posts
            <Link className={classes.add}>
              <i class="fa fa-plus"></i>
            </Link>
                     
          </div>
          <div className={classes.list}>
            <HighlightPost
              logo = {post.logo}
              jobName = {post.jobName}
              company = {post.company}
              location = {post.location}
              typeOfJob = {post.typeOfJob}
              typeOfWorkplace = {post.typeOfWorkplace}
              salary = {post.salary}
              candidates = {post.candidates}
              skills = {post.skills}
            />
            <HighlightPost
              logo = {post.logo}
              jobName = {post.jobName}
              company = {post.company}
              location = {post.location}
              typeOfJob = {post.typeOfJob}
              typeOfWorkplace = {post.typeOfWorkplace}
              salary = {post.salary}
              candidates = {post.candidates}
              skills = {post.skills}
            />
            <HighlightPost
              logo = {post.logo}
              jobName = {post.jobName}
              company = {post.company}
              location = {post.location}
              typeOfJob = {post.typeOfJob}
              typeOfWorkplace = {post.typeOfWorkplace}
              salary = {post.salary}
              candidates = {post.candidates}
              skills = {post.skills}
            />
          </div>
        </div>

        <h1 className={classes["tittle-text"]}>IDEAL <span>CVs FOR </span>YOU</h1>

        <div className={classes["job-list"]}>
          <HighLightCv
            avatar = {cv.avatar}
            userName = {cv.userName}
            experience = {cv.experience}
            age = {cv.age}
            minSalary = {cv.minSalary}
            maxSalary = {cv.maxSalary}
            jobType = {cv.jobType}
            skills = {cv.skills}
          />
          <HighLightCv
            avatar = {cv.avatar}
            userName = {cv.userName}
            experience = {cv.experience}
            age = {cv.age}
            minSalary = {cv.minSalary}
            maxSalary = {cv.maxSalary}
            jobType = {cv.jobType}
            skills = {cv.skills}
          />
          <HighLightCv
            avatar = {cv.avatar}
            userName = {cv.userName}
            experience = {cv.experience}
            age = {cv.age}
            minSalary = {cv.minSalary}
            maxSalary = {cv.maxSalary}
            jobType = {cv.jobType}
            skills = {cv.skills}
          />
        </div>
    </>
   
  );
};

export default PostManagement;
