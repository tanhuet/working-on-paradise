import classes from "./Comment.module.scss";
import locationImg1 from "../../../../../asses/resume.png";
import UserComment from "./UserComment";

const Comment = () => {
  return (
    <div className={classes.des}>
      <div className={classes.card}>
        <div className={classes.headname}>
          <img className={classes.img1} src={locationImg1} alt=".." />
          <h3>Applied Cvs</h3>
        </div>
        <div className={classes.company}>
          <UserComment />
          <hr></hr>
          <UserComment />
        </div>
      </div>
    </div>
  );
};

export default Comment;
