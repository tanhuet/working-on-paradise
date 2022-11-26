import Wrap from "../UI/Wrap"
import classes from "./RecommendedJob.module.scss";

const RecommendedJob = (props) => {
  return (
    <Wrap className={classes.recomended}>
      <div className={classes.title}>
        <p>Recommended Job</p>
      </div>
      <div className={classes.introduction}>
        <div className={classes.img}>
          <img src={props.logo} alt=".." />
        </div>
        <p>{props.jobName}</p>
        <div className={classes.info}>
          <ul>
            <li>{props.companyName}</li>
            <li>{props.address}</li>
          </ul>
      </div>
      </div>
    </Wrap>
  );
};

export default RecommendedJob;
