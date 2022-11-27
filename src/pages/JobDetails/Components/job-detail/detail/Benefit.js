import classes from "./Benefit.module.scss";
import { Link } from "react-router-dom";
import Job from "./Job";
import locationImg from "../../../../../asses/nawest.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
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

const Benefit = (props) => {
  const [status, setStatus] = useState(props.benefit.redirect);
  const handleRedirect = () => {
    if (status === true) {
      props.benefit.handleFuntion2(false);
      setStatus(false);
    } else {
      props.benefit.handleFuntion2(true);
      setStatus(true);
    }
  };
  const recomend = props.benefit.recommend;
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  function handleSubmit(event) {
    let text = "Do you confirm submitting your cv?";
    if (window.confirm(text) === true) {
      axios
        .post(`https://tanhuet.site/job/${props.benefit.id}/apply`, "", {
          headers: { Authorization: `Bearer ${userStore.accessToken}` },
        })
        .then(function (response) {
          props.benefit.handleFuntion(true);
          window.alert(response.data);
        })
        .catch(function (error) {
          console.log(error);
          window.alert("Something Wrong");
        });
    }
  }
  return (
    <div>
      <div className={classes.des}>
        <div className={classes.card}>
          <div className={classes.button}>
            <Link className={classes.btn}>Benefit</Link>
          </div>
          <Link>
            <div className={classes.company}>
              <div className={classes["info"]}>
                {props.benefit.benefit?.map((item, index) => (
                  <p key={index}>● {item}</p>
                ))}
              </div>
            </div>
          </Link>
        </div>
        <Link href="#" to={`/details/${recomend.id}`} onClick={handleRedirect}>
          <Job
            logo={recomend.authorAvatar}
            title={recomend.title}
            companyName={recomend.authorName}
            address={recomend.authorAddress}
            position={recomend.positions}
            salary={recomend.salary}
            typeOfWorking={recomend.typeOfWorking}
            quantity={recomend.quantity}
            id={recomend.id}
          />
        </Link>
      </div>
      <div>
        <button
          className={classes.button1}
          onClick={handleSubmit}
          disabled={props.benefit.status}
        >
          {props.benefit.button}
        </button>
      </div>
    </div>
  );
};

export default Benefit;
