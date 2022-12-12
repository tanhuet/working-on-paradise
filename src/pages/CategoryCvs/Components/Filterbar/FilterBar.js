import classes from "./FilterBar.module.scss";
import FilterImg from "../../../../components/Icons/Filter";
import { useState } from "react";

const FilterBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen((pre) => {
      return !pre;
    });
  };

  const filterHandler = (e) => {
    e.prenventDefault();
  };

  return (
    <div className={classes.bar}>
      <div className={classes.filter}>
        <div className={classes["filter-button"]}>
          <button onClick={openHandler}>
            <FilterImg />
          </button>
        </div>
        <div className={classes["filter-search"]}>
          <form onSubmit={filterHandler}>
            <input type="text" placeholder="Category, TypeJob, ..." name="filter" list="job" />
            <datalist id="job">
              {props.filter.slice(0, 7).map((item, index) => (
                <option value={item} key={index} />
              ))}
            </datalist>
          </form>
        </div>
      </div>
      {isOpen && (
        <form>
          <div className={classes.detail}>
            <div className={classes["detail-left"]}>
              <div className={classes["category"]}>
                <p>Category</p>
                <input type="text" />
              </div>
              <div className={classes["skill"]}>
                <p>Skill</p>
                <input type="text" />
              </div>
              <div className={classes["location"]}>
                <p>Location</p>
                <input type="text" />
              </div>
              <div className={classes["salary"]}>
                <p>Salary</p>
                <div className={classes["inputSalary"]}>
                  <input type="text" />
                  <span>to</span>
                  <input type="text" />
                </div>
                {/* <input type="text" />
                <span>to</span>
                <input type="text" /> */}
              </div>
            </div>
            <div className={classes["detail-right"]}>
              <div className={classes["type-of-workplace"]}>
                <div className={classes.title}>
                  <p>Type of workplace</p>
                </div>
                <div className={classes.btn}>
                  <button>On Site</button>
                  <button>Remote</button>
                </div>
              </div>
              <div className={classes["job-type"]}>
                <div className={classes.title}>
                  <p>Type of workplace</p>
                </div>
                <div className={classes.btn}>
                  <button>Full-time</button>
                  <button>Part time</button>
                  <button>Freelancer</button>
                </div>
              </div>
              <div className={classes["experience"]}>
                <div className={classes.title}>
                  <p>Experience</p>
                </div>
                <div className={`${classes.btn} ${classes.exp}`}>
                  <button>Fresher</button>
                  <button>Internship</button>
                  <button>Junior</button>
                  <button>Senior</button>
                  <button>Chef</button>
                </div>
              </div>
              <button className={classes.button1} onClick={filterHandler}>
                Apply
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default FilterBar;
