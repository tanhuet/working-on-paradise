import classes from "./Banner.module.scss";
import postImg from "../../../asses/post.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className={classes.container}>
      <div className={classes["container-img"]}>
        <img src={postImg} alt="postImg" />
      </div>
      <div className={classes["container-text"]}>
        <div className={classes.text}>Manage your Application and look for potential Jobs</div>
        <div className={classes.makeup}>
          <Link to="/cv">
            <button className={classes.btn}>Create CV</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
