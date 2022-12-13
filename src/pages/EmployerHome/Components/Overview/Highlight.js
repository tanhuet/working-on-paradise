import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Brifcase from "../../../../components/Icons/Brifcase";
import Rocket from "../../../../components/Icons/Rocket";
import Talents from "../../../../components/Icons/Talents";
import classes from "./Highlight.module.scss";

const Highlight = () => {
  const navigate = useNavigate();

  const suggestion = useRef("");

  const submitHander = (e) => {
    e.preventDefault();
    navigate(`/employer-cv?filter=${suggestion.current.value}`);
  };

  return (
    <React.Fragment>
      <div className={classes["find-job"]}>
        <section>
          <h1>
            Find your <span>potential candidate</span>
          </h1>
          <h2>Now It's easy</h2>
          <p>Thousand of Candidates here. Find Your Potential Candidate Today!</p>
          <p>Competitive CVs Posting Today, Find Out!</p>
        </section>
        <form onSubmit={submitHander}>
          <input type="text" placeholder="Search" ref={suggestion} />
          <button>Search</button>
        </form>
      </div>
      <div className={classes.attainment}>
        <div className={classes.job}>
          <div className={classes.icon}>
            <Brifcase />
          </div>
          <div className={classes.info}>
            <h3>8K+</h3>
            <p>CURRENT JOBS</p>
          </div>
        </div>
        <div className={classes.job}>
          <div className={classes.icon}>
            <Rocket />
          </div>
          <div className={classes.info}>
            <h3>400+</h3>
            <p>START-UPS</p>
          </div>
        </div>
        <div className={classes.job}>
          <div className={classes.icon}>
            <Talents />
          </div>
          <div className={classes.info}>
            <h3>20+</h3>
            <p>TALENTS</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Highlight;
