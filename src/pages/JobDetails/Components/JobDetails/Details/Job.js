import { Link, NavLink } from "react-router-dom";
import classes from "./Job.module.scss";
import ReactImageFallback from "react-image-fallback";
import locationImg from "../../../../../asses/bg-paradise.PNG";
const Job = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.makeup1}>
        <div className={classes.recomment}>
          <h3>Recommended Job</h3>
        </div>
      </div>
      <div className={classes.detail}>
        <div className={classes.company}>
          <NavLink href="#" to={`/details/${props.id}`}>
            <div className={classes.logo}>
              <ReactImageFallback
                src={props.logo}
                fallbackImage={locationImg}
              />
            </div>
          </NavLink>
        </div>
        <div className={classes.company1}>
          <div className={classes.info1}>
            <Link href="#" to={`/details/${props.id}`}>
              <h3>{props.title}</h3>
            </Link>
          </div>
        </div>
        <div className={classes.company2}>
          <p>● Company's name: {props.companyName}</p>
          <p>● Address: {props.address}</p>
          <p>● Position: {props.position}</p>
          <p>● Salary: {props.salary}</p>
          <p>● Type of Job: {props.typeOfWorking}</p>
          <p>● Slot: {props.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
