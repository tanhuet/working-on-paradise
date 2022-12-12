import axios from "axios";
import { useState } from "react";
import swal from "sweetalert";
import config from "../../config";
import classes from "./ImportData.module.scss";
import { useSelector } from "react-redux";
import Tippy from "@tippyjs/react";

function ImportData() {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [url, setUrl] = useState("");

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tempUrlSplit = url.split("/");
    let tempUrl = tempUrlSplit[0];
    for (let i = 1; i < tempUrlSplit.length; i++) {
      if (tempUrlSplit[i].length > tempUrl.length) {
        tempUrl = tempUrlSplit[i];
      }
    }

    axios
      .post(`${config.api.url}/job/import`, { sheetId: tempUrl }, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
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

      <Tippy
        content={
          <span>
            <img
              src="https://jobsgo-storage.s3.ap-southeast-1.amazonaws.com/images/6397a252cc93404331229323"
              width="360px"
              height="300px"
              alt="tip"
            />
          </span>
        }
      >
        <p>* Be sure that every one can edit your sheet</p>
      </Tippy>
      <input className={classes.input} placeholder="Sheet Id" value={url} onChange={handleChange}></input>
      <button className={classes.button} onClick={handleSubmit}>
        Import
      </button>
    </div>
  );
}

export default ImportData;
