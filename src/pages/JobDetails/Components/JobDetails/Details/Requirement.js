import classes from "./Requirement.module.scss";
import { Link } from "react-router-dom";
import Job from "./Job";
import { useState } from "react";

const Requirement = (props) => {
  const [status, setStatus] = useState(props.req.redirect);
  const handleRedirect = () => {
    if (status === true) {
      props.req.handleFuntion(false);
      setStatus(false);
    } else {
      props.req.handleFuntion(true);
      setStatus(true);
    }
  };
  const recomend = props.req.recommend;
  return (
    <div className={classes.des}>
      <div className={classes.card}>
        <div className={classes.button}>
          <Link className={classes.btn}>Requirement</Link>
        </div>
        <Link>
          <div className={classes.company}>
            <div className={classes["info"]}>
              {props.req.requirements?.map((item, index) => (
                <p key={index}>● {item}</p>
              ))}
            </div>
          </div>
        </Link>
      </div>
      <Link href="#" to={`/details/${recomend.id}`} onClick={handleRedirect}>
        <Job
          logo={recomend.logo}
          title={recomend.title}
          companyName={recomend.authorName}
          address={recomend.authorAddress}
          position={recomend.positions}
          salary={recomend.salary}
          typeOfWorking={recomend.typeOfWorking}
          quantity={recomend.quantity}
          id={recomend.id}
        />
      </Link>
    </div>
  );
};

export default Requirement;
