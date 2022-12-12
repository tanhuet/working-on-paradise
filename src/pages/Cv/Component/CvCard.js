import classes from "./CvCard.module.scss";
import axios from "axios";
import config from "../../../config";
import { useSelector } from "react-redux";
import swal from "sweetalert";

function CvCard(props) {
  const userStore = useSelector((state) => state.auth.login?.currentUser);

  const deleteCV = (position) => {
    swal({
      title: "Are you sure?",
      text: "You will remove this cv from your profile!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(`${config.api.url}/cv/${position}`, { headers: { Authorization: `Bearer ${userStore?.accessToken}` } }).then(() => {
          props.onDelete();
          swal("Poof! Your cv has been removed!", {
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <div>
      <div className={classes["box-cv"]}>
        <div style={{ display: "flex", flexDirection: "row-reverse", height: "100%", alignItems: "flex-start" }}>
          <button type="button" onClick={() => deleteCV(props.index)} style={{ background: "white", border: "2px solid white" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
        <a href={props.CvLink}>
          <div className={classes["title"]}>CV - {props.index}</div>
          <p>Latest Update today</p>
          <div className={classes["list-button"]}>
            <button>Share</button>
            <button>Download</button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default CvCard;
