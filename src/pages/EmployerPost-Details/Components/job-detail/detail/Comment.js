import classes from "./Comment.module.scss";
import locationImg from "../../../../../asses/nawest.png";
import locationImg1 from "../../../../../asses/resume.png";
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
          <h3>Applied Cvs</h3>
        </div>
        <div className={classes.company}>
          <Comment />
          <hr></hr>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Offer;
