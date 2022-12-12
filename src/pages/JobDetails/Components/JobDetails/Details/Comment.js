import classes from "./Comment.module.scss";
import { Link } from "react-router-dom";
import locationImg1 from "../../../../../asses/image1.png";
import UserComment from "./UserComment";

const Comment = () => {
  return (
    <div className={classes.des}>
      <div className={classes.card}>
        <div className={classes.headname}>
          <img className={classes.img1} src={locationImg1} alt=".." />
          <h3>Comment</h3>
          <p>
            <Link>Sign in</Link>
            <span>/</span>
            <Link>Sign up</Link>
            <span>&nbsp; to comment</span>
          </p>
        </div>
        <form className={classes.form1}>
          <input type="text" placeholder="        Add comment here..." />
          <div>
            <button className={classes.button1}>Post</button>
          </div>
        </form>
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
