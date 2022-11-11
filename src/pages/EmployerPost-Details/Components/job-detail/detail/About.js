import classes from "./About.module.scss";
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

const Offer = (props) => {
  return (
    <div>
      <div className={classes.des}>
        <div className={classes.card}>
          <div className={classes.button}>
            <Link className={classes.btn}>About Company</Link>
          </div>
          <Link>
            <div className={classes.company}>
              <div className={classes.info}>
                <p>
                  Google LLC is an American multinational technology company
                  that focuses on search engine technology, online advertising,
                  cloud computing, computer software, quantum computing,
                  e-commerce, artificial intelligence, and consumer electronics.
                  It has been referred to as the "most powerful company in the
                  world" and one of the world's most valuable brands due to its
                  market dominance, data collection, and technological
                  advantages in the area of artificial intelligence. It is
                  considered one of the Big Five American information technology
                  companies, alongside Amazon, Apple, Meta, and Microsoft.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offer;
