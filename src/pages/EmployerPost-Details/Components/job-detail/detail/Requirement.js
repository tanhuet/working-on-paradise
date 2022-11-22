import classes from "./Requirement.module.scss";
import { Link } from "react-router-dom";

const Requirement = (props) => {
  return (
    <div className={classes.des}>
      <div className={classes.card}>
        <div className={classes.button}>
          <Link className={classes.btn}>Requirement</Link>
        </div>
        <Link>
          <div className={classes.company}>
            <div className={classes["info"]}>
              {props.req?.map((item, index) => (
                <p key={index}>● {item}</p>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Requirement;
