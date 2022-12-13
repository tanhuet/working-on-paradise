import classes from "./UserComment.module.scss";
import ReactImageFallback from "react-image-fallback";
import locationImg from "../../../../../asses/bg-paradise.PNG";
import swal from "sweetalert";
import axios from "axios";
import { useSelector } from "react-redux";
import config from "../../../../../config";
import { Link } from "react-router-dom";
const UserComment = (props) => {
  // const [status, setStatus] = useState("pending");
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const subDate = () => <p>{new Date().getDate() - new Date(props.data?.createdAt).getDate()} days ago</p>;
  const handleFuntion1 = (status) => {
    swal({
      title: "Are you sure?",
      text: "Have you confirmed accepting CV?",
      icon: "warning",
      buttons: true,
    }).then((willAccept) => {
      if (willAccept) {
        swal(
          axios
            .put(
              `${config.api.url}/application/${props.data.id}/`,
              {
                status: "accepted",
              },
              {
                headers: { Authorization: `Bearer ${userStore.accessToken}` },
              }
            )
            .then(function (response) {
              swal("Success!!!", {
                icon: "success",
              }).then(props.status(true));
              //
            })
            .catch(function (error) {
              console.log(error);
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
  };
  const handleFuntion2 = () => {
    swal({
      title: "Are you sure?",
      text: "Have you confirmed rejecting CV?",
      icon: "warning",
      buttons: true,
    }).then((willAccept) => {
      if (willAccept) {
        swal(
          axios
            .put(
              `${config.api.url}/application/${props.data.id}/`,
              {
                status: "rejected",
              },
              {
                headers: { Authorization: `Bearer ${userStore.accessToken}` },
              }
            )
            .then(function () {
              swal("Success!!!", {
                icon: "success",
              }).then(props.status(true));
              //
            })
            .catch(function (error) {
              console.log(error);
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
  };
  return (
    <div className={classes.des}>
      <Link to={`/account/${props.data.jobseeker.id}`} className={classes.name}>
        <h3>{props.data.jobseeker.username}</h3>
        <p> {subDate()}</p>
      </Link>
      <div className={classes.boxInfo}>
        <ReactImageFallback className={classes.img1} src={props.data.jobseeker.avatar} alt=".." fallbackImage={locationImg} />
        <div className={classes.boxLeft}>
          <ul>
            <li>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" class="bi bi-person" viewBox="0 0 20 20">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                </svg>
                Name: <span> {props.data.jobseeker.name}</span>
              </p>
            </li>
            <li>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-justify-left" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M2 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
                Type of Job: <span> {props.data.jobseeker.typeOfJob}</span>
              </p>
            </li>

            <li>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-gender-ambiguous" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M11.5 1a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 1 1 3.471-6.648L14.293 1H11.5zm-.997 4.346a3 3 0 1 0-5.006 3.309 3 3 0 0 0 5.006-3.31z"
                  />
                </svg>
                Gender: <span> {props.data.jobseeker.gender}</span>
              </p>
            </li>
          </ul>
        </div>
        <div className={classes.boxRight}>
          <ul>
            <li>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-coin" viewBox="0 0 20 20">
                  <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                </svg>
                Salary: <span> {props.data.jobseeker.salary} $</span>
              </p>
            </li>
            <li>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-house" viewBox="0 0 20 20">
                  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                </svg>
                Address: <span> {props.data.jobseeker.address}</span>
              </p>
            </li>
            <li>
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 20 20">
                  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
                Experience: <span> {props.data.jobseeker.experience}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={classes.content}>
        <h3>
          Name: <span>{props.data.jobseeker.name}</span> Salary:{" "}
          <span>{props.data.jobseeker.salary}</span>
        </h3>
        <h3>
          Gender: <span>{props.data.jobseeker.gender}</span> Address:{" "}
          <span>{props.data.jobseeker.address}</span>
        </h3>
        <h3>
          Type of job: <span>{props.data.jobseeker.typeOfJob}</span> EXP:{" "}
          <span>{props.data.jobseeker.experience}</span>
        </h3>
      </div> */}
      <div className={classes.boxButton}>
        <button className={classes.button2} onClick={handleFuntion1}>
          Accept
        </button>

        <button className={classes.button2} onClick={handleFuntion2}>
          Reject
        </button>
      </div>
      <hr></hr>
    </div>
  );
};

export default UserComment;
