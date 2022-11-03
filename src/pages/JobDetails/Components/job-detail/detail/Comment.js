import classes from "./Comment.module.scss";
import { Link } from "react-router-dom";
import Job from "./Job";
import locationImg from "../../../../../asses/nawest.png";
import locationImg1 from "../../../../../asses/image1.png";
import Comment from "./UserComment";

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
        <div className={classes.headname}>
          <img className={classes.img1} src={locationImg1} alt=".." />
          <h3>Comment</h3>
          <p>
            <Link>Sign in</Link>
            <span>/</span>
            <Link>Sign up</Link>
            <span>&nbsp; to comment</span>
          </p>
        </div>
        <form className={classes.form1}>
          <input type="text" placeholder="        Add comment here..." />
          <div>
            <button className={classes.button1}>Post</button>
          </div>
        </form>
        <div className={classes.company}>
          <Comment />
          <hr></hr>
          <Comment />
        </div>
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

export default Offer;
