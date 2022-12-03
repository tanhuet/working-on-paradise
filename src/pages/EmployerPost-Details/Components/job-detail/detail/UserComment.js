import classes from "./UserComment.module.scss";
import ReactImageFallback from "react-image-fallback";
import locationImg from "../../../../../asses/bg-paradise.PNG";
import swal from "sweetalert";
import axios from "axios";
import { useSelector } from "react-redux";
const UserComment = (props) => {
  // const [status, setStatus] = useState("pending");
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const subDate = () => (
    <p>
      {new Date().getDate() - new Date(props.data?.createdAt).getDate()} days
      ago
    </p>
  );
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
              `https://tanhuet.site/application/${props.data.id}/`,
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
              `https://tanhuet.site/application/${props.data.id}/`,
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
      <div className={classes.name}>
        <h3>{props.data.jobseeker.username}</h3>
        {subDate()}
        <ReactImageFallback
          className={classes.img1}
          src={props.data.jobseeker.avatar}
          alt=".."
          fallbackImage={locationImg}
        />
      </div>
      <div className={classes.content}>
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
      </div>
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
