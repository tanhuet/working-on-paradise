import classes from "./CvDetail.module.scss";
import { Fragment } from "react";
import axios from "axios";
import config from "../../config";
import { useSelector } from "react-redux";
import swal from "sweetalert";
import PdfContainer from "./PdfContainer";
import Doc from "./DocService";
import React from "react";

const CvDetail = (props) => {
  const CV = props.cv;
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const bodyRef = React.createRef();

  const editHandler = () => {
    props.onEdit(true);
  };

  const handleSaveToServer = () => {
    Doc.createPdf(bodyRef.current);
    // axios.post(`${config.api.url}/cv/generate`, { cv: CV }, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then(() => {
    //   swal("Success!", "You have created a new CV!", "success");
    // });
  };

  return (
    <Fragment>
      <div className={classes.form}>
        <div className={classes.header}>
          <button onClick={editHandler}>Edit</button>
          <button onClick={handleSaveToServer}>Download</button>
        </div>
        <div className={classes.name}></div>
        <div ref={bodyRef}>
          <div className={classes.cv}>
            <div className={classes["info1"]}>
              <div className={classes.first}>
                <div className={classes.img}>
                  <img src={CV.logo} alt="..." />
                </div>
                {/* <p>Name</p> */}
                <div className={classes["name-user"]}>
                  <div>
                    <p>{CV.nameUser}</p>
                  </div>
                </div>
              </div>
              <div className={classes.experience}>
                <h2>Experience</h2>
                <div className={classes["exprience-detail"]}>
                  {CV.experience.map((item) => (
                    <div className={classes["item"]} key={item.id}>
                      <p>
                        {item.startDate.toISOString().split("T")[0]} - {item.endDate.toISOString().split("T")[0]}
                      </p>
                      <h3>
                        {item.position} - {item.company}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={classes.activities}>
                <h2>Activities</h2>
                <div className={classes["activities-detail"]}>
                  {CV.activities.map((item) => (
                    <div className={classes["item"]} key={item.id}>
                      <p>
                        {item.startDate.toISOString().split("T")[0]} - {item.endDate.toISOString().split("T")[0]}
                      </p>
                      <h3>
                        {item.position} - {item.organization}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={classes["info2"]}>
              <div className={classes["own-info"]}>
                <div className={classes["own-info-icon"]}>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-calendar3" viewBox="0 0 16 16">
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                      <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                      />
                    </svg>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-envelope" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </div>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-link-45deg" viewBox="0 0 16 16">
                      <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z" />
                      <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="white"
                      className="bi bi-house-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z" />
                      <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z" />
                      <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514Z" />
                    </svg>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="white"
                      className="bi bi-gender-ambiguous"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"
                      />
                    </svg>
                  </div>
                </div>
                <div className={classes["own-info-text"]}>
                  <label>Age:</label>
                  <p>{CV.age}</p>
                  <label>Phone Number:</label>
                  <p>{CV.phone}</p>
                  <label>Email:</label>
                  <p>{CV.email}</p>
                  <label>Address:</label>
                  <p>{CV.address}</p>
                  <label>Sex:</label>
                  <p>{CV.sex}</p>
                </div>
              </div>
              <div className={classes.education}>
                <div className={classes.head}>
                  <div className={classes.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="white"
                      className="bi bi-mortarboard-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z" />
                      <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z" />
                    </svg>
                  </div>
                  <div className={classes.text}>
                    <h2>Education</h2>
                  </div>
                </div>
                <div className={classes["education-detail"]}>
                  {CV.education.map((item) => (
                    <div className={classes["item"]} key={item.id}>
                      <p>
                        {item.startDate.toISOString().split("T")[0]} - {item.endDate.toISOString().split("T")[0]}
                      </p>
                      <h3>
                        {item.position} - {item.school}
                      </h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className={classes.skills}>
                <div className={classes.head}>
                  <div className={classes.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" className="bi bi-stars" viewBox="0 0 16 16">
                      <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                    </svg>
                  </div>
                  <div className={classes.text}>
                    <h2>Skills</h2>
                  </div>
                </div>
                <div className={classes["skills-detail"]}>
                  {CV.skills.map((item) => (
                    <div className={classes["item"]} key={item.id}>
                      <h3>{item.skill}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CvDetail;
