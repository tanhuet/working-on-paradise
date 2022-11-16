import classes from "./Requirement.module.scss";
import { Link } from "react-router-dom";
import Job from "./Job";
import locationImg from "../../../../../asses/nawest.png";

const DUMYJOB = {
  logo: locationImg,
  companyName: "NatWest. Group",
  location: "NatWest. Group - London, UK",
  recruitment: "Enterprise Architect",
  location1: "NatWest. Group - London, UK",
  recruitment1: "Privacy Officer",
  jobName: "UI/UX Desgin",
  type: "Part Time",
  submittedDate: "12/12/2012",
};

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
      <Job
        logo={DUMYJOB.logo}
        companyName={DUMYJOB.companyName}
        jobName={DUMYJOB.jobName}
        location={DUMYJOB.location}
        recruitment={DUMYJOB.recruitment}
        location1={DUMYJOB.location1}
        recruitment1={DUMYJOB.recruitment1}
      />
    </div>
  );
};

export default Requirement;
