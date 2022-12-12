import googleimg from "../../asses/logo-google.png";
import classes from "./ExcitingOffer.module.scss";
// import {Google} from "../Icons/Google"

const ExcitingOffer = (props) => {
  return (
    <div className={`${classes.wrap} ${props.borderColor}`}>
      <div className={classes.title}>
        <div className={classes.img}>
          <img src={googleimg} alt=".." />
        </div>
        <div className={classes.innfo}>
          <h1>Google Inc.</h1>
          <p>Califorlia</p>
        </div>
      </div>
      <div className={classes.description}>
        <h1>UI/UX Design</h1>
        <p>
          Fulltime <br /> 2 days ago
        </p>
      </div>
      <div className={classes.btn}>
        <div className={`${classes.heart} ${props.heartColor}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
          </svg>
        </div>
        <div className={`${classes.apply} ${props.applyColor}`}>
          <h2>Apply Now</h2>
        </div>
      </div>
    </div>
  );
};

export default ExcitingOffer;
