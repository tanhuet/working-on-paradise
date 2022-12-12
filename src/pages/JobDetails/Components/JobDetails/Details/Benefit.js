import classes from "./Benefit.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Job from "./Job";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import config from "../../../../../config";
import swal from "sweetalert";

const Benefit = (props) => {
  const navigate = useNavigate();
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
              .post(`${config.api.url}/job/${props.benefit.id}/apply`, "", {
                headers: { Authorization: `Bearer ${userStore.accessToken}` },
              })
              .then(function (response) {
                props.benefit.handleFuntion(true);
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
            logo={recomend.logo}
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
