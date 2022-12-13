import classes from "./Docs.module.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import config from "../../../../config";
const Docs = (props) => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [status, setStatus] = useState(false);
  const [textarea1, setTextarea1] = useState(props.docs.description);
  const [textarea2, setTextarea2] = useState(props.docs.requirements);
  const [textarea3, setTextarea3] = useState(props.docs.benefits);
  const [textarea4, setTextarea4] = useState(props.docs.about);
  const [salary, setSalary] = useState(props.docs.salary);
  const [typeOfWorking, setTypeOfWorking] = useState(props.docs.typeOfWorking);
  const [gender, setGender] = useState(props.docs.gender);
  const [quantity, setQuantity] = useState(props.docs.quantity);
  const [pos, setPos] = useState(props.docs.positions);
  const [exp, setExp] = useState(props.docs.exp);
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
  const handleChangeSalary = (event) => {
    setSalary(event.target.value);
  };
  const handleChangeType = (event) => {
    setTypeOfWorking(event.target.value);
  };
  const handleChangeQuantity = (event) => {
    setQuantity(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangePos = (event) => {
    setPos(event.target.value);
  };
  const handleChangeExp = (event) => {
    setExp(event.target.value);
  };
  if (status === true) {
    swal({
      title: "Are you sure?",
      text: "Have you confirmed saving the changes?",
      icon: "warning",
      buttons: true,
    }).then((willAccept) => {
      if (willAccept) {
        swal(
          axios
            .put(
              `${config.api.url}/job/${props.docs.id}`,
              {
                description: textarea1,
                requirements: textarea2,
                benefits: textarea4,
                tags: props.docs.tags,
                title:
                  props.docs.title === undefined
                    ? props.docs.jobType
                    : props.docs.title,
                startTime: new Date().toISOString().slice(0, 10),
                endTime: new Date().toISOString().slice(0, 10),
                imageUrl: props.docs.imageUrl,
                salary: salary,
                typeOfWorking: typeOfWorking,
                gender: gender,
                positions: pos,
                slots: quantity,
                exp: exp,
              },
              {
                headers: { Authorization: `Bearer ${userStore.accessToken}` },
              }
            )
            .then(function (response) {
              swal("Poof! Your information has been changed!", {
                icon: "success",
              }).then(window.location.reload(false));
              //
            })
            .catch(function (error) {
              swal(`Error: ${error?.response.data}`, {
                title: "Something wrong!",
                icon: "error",
              });
            })
        );
      } else {
        swal("No changed", {
          icon: "info",
        });
      }
    });
    setStatus(false);
  }

  return (
    <div>
      <div className={classes["des"]}>
        <div className={classes.box}>
          <div className={classes.boxName}>
            <p>Basic Information</p>
          </div>
          <div className={classes.boxInfo}>
            <div className={classes.boxLeft}>
              <ul>
                <li>
                  <p>
                    Salary: <input type="number" onChange={handleChangeSalary} value={salary} />
                    <span>$</span>
                  </p>
                </li>
                <li>
                  <p>
                    Type of Job: <input type="text" onChange={handleChangeType} value={typeOfWorking}></input>
                  </p>
                </li>

                <li>
                  <p>
                    Gender:{" "}
                    <select onChange={handleChangeGender}>
                      <option value={props.docs.gender} disabled selected hidden>
                        {props.docs.gender}
                      </option>
                      {<option value="no-require">No-require</option>}
                      {<option value="male">Male</option>}
                      <option value="female">Female</option>
                    </select>
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.boxRight}>
              <ul>
                <li>
                  <p>
                    Quantity: <input type="number" onChange={handleChangeQuantity} value={quantity} />
                  </p>
                </li>
                <li>
                  <p>
                    Position: <input type="text" onChange={handleChangePos} value={pos} />
                  </p>
                </li>
                <li>
                  <p>
                    Experience:
                    <input onChange={handleChangeExp} value={exp} />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.button}>
            <Link className={classes.btn}>Job Description</Link>
          </div>
          <Link>
            <div className={classes["info"]}>
              <form>
                <textarea name="textValue" onChange={handleChange1} value={textarea1} />
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
                <textarea name="textValue2" onChange={handleChange2} value={textarea2} />
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
                <textarea name="textValue3" onChange={handleChange3} value={textarea4} />
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
                <textarea name="textValue4" onChange={handleChange4} value={textarea3} />
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
