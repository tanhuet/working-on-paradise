import Wrap from "../UI/Wrap"
import classes from "./RecommendedJob.module.scss";
import { Link } from "react-router-dom";

const RecommendedJob = (props) => {
  return (
    <Wrap className={classes.recomended}>
      <div className={classes.title}>
        <p>Recommended Job</p>
      </div>
      
      <div className={classes.introduction}>
      <Link to = {"/details/" + props.id}>
        <div className={classes.img}>
          <img src={props.logo} alt=".." />
        </div>
        </Link>
        <Link to = {"/employerInfo/" + props.author}><p>{props.jobName}</p></Link>
        <Link to = {"/details/" + props.id}>
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
      </Link>
      </div>
      
    </Wrap>
  );
};

export default RecommendedJob;
