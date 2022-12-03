import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import config from "../../config";
import classes from "./ImportData.module.scss";
import { useSelector } from "react-redux";

function ImportData() {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${config.api.url}/job/import`, { sheetId: url }, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        swal("Success!", res.data, "success");
      })
      .catch((err) => {
        swal("Error!", err.response.data, "error");
      });
  };

  return (
    <div className={classes.wrapper}>
      <label className={classes.title}>Enter your Sheet Id</label>
      <input className={classes.input} placeholder="Sheet Id" value={url} onChange={handleChange}></input>
      <button className={classes.button} onClick={handleSubmit}>
        Import
      </button>
    </div>
  );
}

export default ImportData;
