import classes from "./About.module.scss";
import { Link } from "react-router-dom";
import Job from "./Job";
import React, { useState } from "react";

const About = (props) => {
  const [status, setStatus] = useState(props.about.redirect);
  const handleRedirect = () => {
    if (status === true) {
      props.about.handleFuntion(false);
      setStatus(false);
    } else {
      props.about.handleFuntion(true);
      setStatus(true);
    }
  };
  const recomend = props.about.recommend;
  return (
    <div>
      <div className={classes.des}>
        <div className={classes.card}>
          <div className={classes.button}>
            <p className={classes.btn}>About Company</p>
          </div>

          <div className={classes.company}>
            <div className={classes["info"]}>
              {props.about.about?.map((item, index) => (
                <p key={index}>● {item}</p>
              ))}
            </div>
          </div>
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
    </div>
  );
};
export default About;
