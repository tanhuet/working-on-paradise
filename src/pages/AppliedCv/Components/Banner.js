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
        <div className={classes.text}>Now, It's easy to import job from google sheet</div>
        <div className={classes.makeup}>
          <Link to="/import-data">
            <button className={classes.btn}>Import Job</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
