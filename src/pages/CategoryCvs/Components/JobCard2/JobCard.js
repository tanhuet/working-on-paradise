import { Link } from "react-router-dom";
import Card from "../../../../components/UI/Card";
import classes from "./JobCard.module.scss";
import ReactImageFallback from "react-image-fallback";
import locationImg from "../../../../asses/bg-paradise.PNG";
const JobCard = (props) => {
  return (
    <Card>
      <div className={classes.job}>
        <Link to={"/account/" + props.id}>
          <div className={classes.info}>
            <div className={classes.logo}>
              <ReactImageFallback src={props.logo} alt=".." fallbackImage={locationImg} />
            </div>
            <div className={classes.detail}>
              <div>{props.category}</div>
              <div className={classes.introduction}>
                {props.companyName} - {props.location} - {props.experience} {props.category} - {props.jobType} - ${props.salary}
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={classes.skill}>
        <ul className={classes["skill-items"]}>
          {props.skills.map((item) => (
            <div key={item} className={classes.item}>
              {item}
            </div>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default JobCard;
