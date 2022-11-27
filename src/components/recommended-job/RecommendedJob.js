import Wrap from "../UI/Wrap"
import classes from "./RecommendedJob.module.scss";
import { Link } from "react-router-dom";

const RecommendedJob = (props) => {
  return (
    <Wrap className={classes.recomended}>
      <div className={classes.title}>
        <p>Recommended Job</p>
      </div>
      <Link>
      <div className={classes.introduction}>
        <div className={classes.img}>
          <img src={props.logo} alt=".." />
        </div>
        <p>{props.jobName}</p>
        <div className={classes.info}>
          <ul>
            <li>{props.companyName}</li>
            <li>{props.address}</li>
            <li>{props.position}</li>
            <li>{props.salary}$</li>
            <li>{props.jobType}</li>
            <li>slot: {props.slot}</li>
          </ul>
      </div>
      </div>
      </Link>
    </Wrap>
  );
};

export default RecommendedJob;
