import classes from "./Benefits.module.scss";
import { Link } from "react-router-dom";

const Benefit = (props) => {
  return (
    <div className={classes.des}>
      <div className={classes.card}>
        <div className={classes.button}>
          <Link className={classes.btn}>Benefits</Link>
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

export default Benefit;
