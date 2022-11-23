import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Card from "../../../components/UI/Card";
import classes from "./ApplicationCard.module.scss";

const ApplicationCard = (props) => {
  return (
    <Card>
      <div className={classes.job}>
        <Link to={"/details/" + props.id}>
          <div className={classes.info}>
            <div className={classes.logo}>
              <img src={props.logo} alt=".." />
            </div>
            <div className={classes.detail}>
              <div>{props.title}</div>
              <div className={classes.introduction}>
                {props.companyName} - {props.location} - {props.experience} {props.title} - {props.jobType} - ${props.salary}
              </div>
            </div>
          </div>
        </Link>
        <div className={classes["status"]}>{props.status}</div>
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

export default ApplicationCard;
