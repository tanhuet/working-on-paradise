import classes from "./Offer.module.scss";
import { Link } from "react-router-dom";
import Job from "./Job";
import { useState } from "react";

const Offer = (props) => {
  const [status, setStatus] = useState(props.abc.redirect);
  const handleRedirect = () => {
    if (status === true) {
      props.abc.handleFuntion(false);
      setStatus(false);
    } else {
      props.abc.handleFuntion(true);
      setStatus(true);
    }
  };
  const recomend1 = props.abc.recommend1;
  const recomend2 = props.abc.recommend2;
  return (
    <div className={classes.component}>
      <div className={classes.des}>
        <div className={classes.card}>
          <div className={classes.button}>
            <Link className={classes.btn}>Job Description</Link>
          </div>
          <Link>
            <div className={classes.company}>
              <div className={classes["info"]}>
                {props.abc.description?.map((item, index) => (
                  <p key={index}>● {item}</p>
                ))}
              </div>
            </div>
          </Link>
        </div>
        <div className={classes.company2}>
          <Link
            href="#"
            to={`/details/${recomend1.id}`}
            onClick={handleRedirect}
          >
            <Job
              logo={recomend1.logo}
              title={recomend1.title}
              companyName={recomend1.authorName}
              address={recomend1.authorAddress}
              position={recomend1.positions}
              salary={recomend1.salary}
              typeOfWorking={recomend1.typeOfWorking}
              quantity={recomend1.quantity}
              id={recomend1.id}
            />
          </Link>
          <Link
            href="#"
            to={`/details/${recomend2.id}`}
            onClick={handleRedirect}
          >
            <Job
              logo={recomend1.logo}
              title={recomend2.title}
              companyName={recomend2.authorName}
              address={recomend2.authorAddress}
              position={recomend2.positions}
              salary={recomend2.salary}
              typeOfWorking={recomend2.typeOfWorking}
              quantity={recomend2.quantity}
              id={recomend2.id}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Offer;
