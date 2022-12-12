import Wrap from "../../../../components/UI/Wrap";
import classes from "./RecomendedJob.module.scss";

const RecomendedJob = (props) => {
  return (
    <Wrap className={classes.recomended}>
      <div className={classes.title}>
        <p>Recommended Job</p>
      </div>
      <div className={classes.info}>
        <div className={classes.company}>
          <div className={classes.logo}>
            <img src={props.logo} alt=".." />
          </div>
          <div className={classes["company-name"]}>{props.companyName}</div>
        </div>
        <div className={classes["job-list"]}>
          {props.jobs.map((item) => (
            <div key={item.id}>
              <div className={classes.line}></div>
              <div className={classes.job}>
                <p>
                  {item.category}
                  <br />
                  <span>
                    {item.location} - {item.jobType}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrap>
  );
};

export default RecomendedJob;
