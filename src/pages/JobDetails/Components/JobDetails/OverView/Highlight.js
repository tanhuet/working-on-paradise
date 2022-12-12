import React, { useState } from "react";
import classes from "./Highlight.module.scss";
import locationImg from "../../../../../asses/category-job.png";
import { Google } from "../../../../../components/Icons/Google";
import { useSelector } from "react-redux";
import axios from "axios";
import ReactImageFallback from "react-image-fallback";
import config from "../../../../../config/index";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
const Highlight = (props) => {
  const [flag, setFlag] = useState(false);
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const navigate = useNavigate();

  function handleSubmit(event) {
    if (userStore === null) {
      navigate(`/signin`);
    } else {
      swal({
        title: "Are you sure?",
        text: "When you click Ok, you will submit your CV to the employer",
        icon: "warning",
        buttons: true,
      }).then((willAccept) => {
        if (willAccept) {
          swal(
            axios
              .post(`${config.api.url}/job/${props.skills.id}/apply`, "", {
                headers: { Authorization: `Bearer ${userStore.accessToken}` },
              })
              .then(function (response) {
                props.skills.handleFuntion(true);
                swal("Your CV has been submitted successfully", {
                  icon: "success",
                });
              })
              .catch(function (error) {
                swal(`Error: ${error?.response.data}`, {
                  title: "Something wrong!",
                  icon: "error",
                });
              })
          );
        } else {
          swal("Sent unsuccessfully", {
            icon: "info",
          });
        }
      });
    }
  }

  const followHanlder = async () => {
    if (userStore) {
      try {
        const resFlag = await axios.get(`${config.api.url}/job/${props.skills.id}/marked`, {
          headers: { Authorization: `Bearer ${userStore.accessToken}` },
        });
        if (!resFlag.data) {
          await axios
            .post(`${config.api.url}/job/${props.skills.id}/mark`, {}, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
            .then(
              swal("Success, Added to Favorite", {
                icon: "success",
              })
            );
          if (flag === false) {
            props.skills.flagFuntion(true);
            setFlag(true);
          } else {
            props.skills.flagFuntion(false);
            setFlag(false);
          }
        } else {
          await axios
            .delete(`${config.api.url}/job/${props.skills.id}/unmark`, {
              headers: { Authorization: `Bearer ${userStore.accessToken}` },
            })
            .then(
              swal("Success, Deleted from Favorite", {
                icon: "success",
              })
            );
          if (flag === false) {
            props.skills.flagFuntion(true);
            setFlag(true);
          } else {
            props.skills.flagFuntion(false);
            setFlag(false);
          }
        }
      } catch (error) {
        swal(`Error: ${error?.response.data}`, {
          title: "Something wrong!",
          icon: "error",
        });
      }
    }
  };

  const handleContact = async () => {
    await axios.post(
      `${config.api.url}/chat/conversation`,
      { friendId: `${props.skills.author}` },
      { headers: { Authorization: `Bearer ${userStore.accessToken}` } }
    );
    navigate(`/message`);
  };

  return (
    <React.Fragment>
      <div className={classes.underHeader}>
        <ReactImageFallback className={classes.img1} src={props.skills.imageUrl} alt=".." fallbackImage={locationImg} />

        <div className={classes.factory}>
          <Link to={"/employerInfo/" + props.skills.authorId}>
            <div className={classes.icon}>
              <Google src={props.skills.icon} />
            </div>
          </Link>

          <div className={classes.company1}>
            <Link to={"/employerInfo/" + props.skills.authorId}>
              <div className={classes.info1}>
                <h3>{props.skills.jobType}</h3>
                <p>
                  {props.skills.company} - {props.skills.address} - {Math.abs(props.skills.daysPost)} days ago
                </p>
                <div className={classes.skill}>
                  <ul className={classes["skill-items"]}>
                    {props.skills?.skill?.map((item) => (
                      <div key={item} className={classes.item}>
                        {item}
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </Link>
          </div>
          <div className={classes.tagButton}>
            <button className={classes.button1} onClick={handleContact}>
              Contact
            </button>
            <button className={classes.button1} onClick={handleSubmit} disabled={props.skills.status}>
              {props.skills.button}
            </button>

            <button className={classes.btn} onClick={followHanlder}>
              {!props.skills.bookmark && (
                <svg xmlns="http://www.w3.org/2000/svg" width="45px" fill="#48CCCD" class="bi bi-bookmark" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                </svg>
              )}
              {props.skills.bookmark && (
                <svg xmlns="http://www.w3.org/2000/svg" width="45px" fill="#48CCCD" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>
              )}
            </button>
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
                  <p>
                    Salary: <span> {props.skills.salary} $</span>
                  </p>
                </li>
                <li>
                  <p>
                    Type of Job: <span> {props.skills.typeOfWorking}</span>
                  </p>
                </li>

                <li>
                  <p>
                    Gender: <span> {props.skills.gender}</span>
                  </p>
                </li>
              </ul>
            </div>
            <div className={classes.boxRight}>
              <ul>
                <li>
                  <p>
                    Quantity: <span> {props.skills.quantity}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Position: <span> {props.skills.positions}</span>
                  </p>
                </li>
                <li>
                  <p>
                    Experience: <span> {props.skills.exp}</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Highlight;
