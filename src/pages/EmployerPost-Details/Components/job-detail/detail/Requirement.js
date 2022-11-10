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

const Offer = () => {
  return (
    <div className={classes.des}>
      <div className={classes.card}>
        <div className={classes.button}>
          <Link className={classes.btn}>Requirement</Link>
        </div>
        <Link>
          <div className={classes.company}>
            <div className={classes.info}>
              <p>● Type of Job: Fulltime</p>
              <p>● Qualification: Bachelor’s Degree</p>
              <p>
                ● Solid understanding of interaction/graphic design fundamentals
              </p>
              <p>
                ● Ability to create easily understandable story (persona) based
                solutions
              </p>
              <p>
                ● Easily adapts and learns new things whether it’s a new
                prototyping tool, design process, or game engine
              </p>
              <p>● Ability to switch context across projects</p>
              <p>
                ● Ability to produce high-quality work quickly and iterate as
                much as necessary toward the best solutions
              </p>
              <p>● 7+years of UI/UX experience</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Offer;
