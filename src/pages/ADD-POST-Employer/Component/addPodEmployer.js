import classes from "./addPostEmployer.module.scss";
import AddCover from "../../../asses/AddCover.png";
import test from "../../../asses/post.png";
import ButtonCamera from "../../../asses/ButtonCamera.png";
const AddPostEmployer = (props) => {
  return (
    <div className={`container`}>
      <div className={classes["header-div"]}>
        <div className={classes["add-image"]}>
          <img src={AddCover} />
        </div>
        <div className={classes["body-add-post"]}>
          <div className={`row`}>
            <div className={`col-sm-2`}>
              <div className={`dot ${classes["avatar-add-post"]}`}>
                <img
                  src={test}
                  style={{ borderRadius: "50%", width: "150px" }}
                />
              </div>
              <div className={classes["button-camera"]}>
                <img src={ButtonCamera} />
              </div>
            </div>
            <div
              className={`col-sm-5 order-1`}
              style={{ padding: "20px 20px" }}
            >
              <span>
                <b>Job's title</b>
              </span>
              <br />
              <span>Company - Location</span>
            </div>
            <div className={`col-sm-5 order-2 ${classes["button-save"]}`}>
              <button>Save</button>
            </div>
          </div>

          <div className={classes.box}>
          <div className={classes.boxName}>
            <p>Basic Information</p>
          </div>
          <div className={classes.boxInfo}>
            <div className={classes.boxLeft}>
              <ul>
                <li>
                  <p1>Salary:</p1>
                  <span> test1</span>
                </li>
                <li>
                  <p1>Type of Job:</p1>
                  <span> test1</span>
                </li>

                <li>
                  <p1>Gender:</p1>
                  <span> test1</span>
                </li>
              </ul>
            </div>
            <div className={classes.boxRight}>
              <ul>
                <li>
                  <p1>Quantity:</p1>
                  <span> test1</span>
                </li>
                <li>
                  <p1>Position:</p1>
                  <span> test1</span>
                </li>
                <li>
                  <p1>Experience:</p1>
                  <span> test1</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
          

          <div className={classes["item-list"]}>

            <div className={classes["items-1"]}>
              <div id="list-item-1" className={classes.title}>
                <div className={classes.makeup} style={{ width: "154px" }}>
                  <div className={classes.style1}>Job Description</div>
                </div>
              </div>
              <div className={`d-flex`}>
                <div className={classes.data} style={{ height: "500px" }}>
                  <textarea
                    className={`${classes.font} ${classes.textexper}`}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className={classes["items-2"]}>
              <div id="list-item-1" className={classes.title}>
                <div className={classes.makeup} style={{ width: "154px" }}>
                  <div className={classes.style1}>Requirement</div>
                </div>
              </div>
              <div className={`d-flex`}>
                <div className={classes.data} style={{ height: "400px" }}>
                  <textarea
                    className={`${classes.font} ${classes.textexper}`}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className={classes["items-3"]}>
              <div id="list-item-1" className={classes.title}>
                <div className={classes.makeup} style={{ width: "154px" }}>
                  <div className={classes.style1}>About Company</div>
                </div>
              </div>
              <div className={`d-flex`}>
                <div className={classes.data} style={{ height: "400px" }}>
                  <textarea
                    className={`${classes.font} ${classes.textexper}`}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className={classes["items-4"]}>
              <div id="list-item-1" className={classes.title}>
                <div className={classes.makeup} style={{ width: "154px" }}>
                  <div className={classes.style1}>About Company</div>
                </div>
              </div>
              <div className={`d-flex`}>
                <div className={classes.data} style={{ height: "400px" }}>
                  <textarea
                    className={`${classes.font} ${classes.textexper}`}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddPostEmployer;
