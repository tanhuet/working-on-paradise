import classes from "./Docs.module.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
const Docs = (props) => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [status, setStatus] = useState(false);
  const [textarea1, setTextarea1] = useState("");
  const [textarea2, setTextarea2] = useState("");
  const [textarea3, setTextarea3] = useState("");
  const [textarea4, setTextarea4] = useState("");
  const handleChange1 = (event) => {
    setTextarea1(event.target.value);
  };
  const handleChange2 = (event) => {
    setTextarea2(event.target.value);
  };
  const handleChange3 = (event) => {
    setTextarea3(event.target.value);
  };
  const handleChange4 = (event) => {
    setTextarea4(event.target.value);
  };
  const handleSubmit = (event) => {
    setStatus(true);
  };
  if (status === true) {
    let text = "Have you confirmed saving the changes?";
    if (window.confirm(text) === true) {
      axios
        .put(
          `https://tanhuet.site/job/${props.docs.id}`,
          {
            description: textarea1,
            requirement: textarea2,
            benefits: textarea4,
            title: textarea3,
          },
          {
            headers: { Authorization: `Bearer ${userStore.accessToken}` },
          }
        )
        .then(function (response) {
          window.alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
          window.alert("Something Wrong");
        });
    }
    setStatus(false);
  }
  return (
    <div>
      <div className={classes["des"]}>
        <div className={classes.card}>
          <div className={classes.button}>
            <Link className={classes.btn}>Job Description</Link>
          </div>
          <Link>
            <div className={classes["info"]}>
              <form>
                <textarea name="textValue" onChange={handleChange1} />
              </form>
            </div>
          </Link>
        </div>
        <div className={classes.card}>
          <div className={classes.button}>
            <Link className={classes.btn}>Requirement</Link>
          </div>
          <Link>
            <div className={classes["info"]}>
              <form>
                <textarea name="textValue2" onChange={handleChange2} />
              </form>
            </div>
          </Link>
        </div>
        <div className={classes.card}>
          <div className={classes.button}>
            <Link className={classes.btn}>About</Link>
          </div>
          <Link>
            <div className={classes["info"]}>
              <form>
                <textarea name="textValue3" onChange={handleChange3} />
              </form>
            </div>
          </Link>
        </div>
        <div className={classes.card}>
          <div className={classes.button}>
            <Link className={classes.btn}>Benefit</Link>
          </div>
          <Link>
            <div className={classes["info"]}>
              <form>
                <textarea name="textValue4" onChange={handleChange4} />
              </form>
            </div>
          </Link>
        </div>
        <button className={classes.button2} onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
};
export default Docs;
