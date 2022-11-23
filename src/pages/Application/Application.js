import { Fragment, useEffect, useState } from "react";
import JobList from "./Components/JobList";
import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
// import locationImg from "../../asses/img-location.png"

const Application = () => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [application, setApplication] = useState();
  useEffect(() => {
    axios
      .get(`${config.api.url}/application/mine`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        setApplication(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userStore]);

  const jobApplied = [];

  const handleGetJob = async () => {
    for (let ap of application) {
      const job = await axios.get(`${config.api.url}/job/${ap.jobId}`);
      jobApplied.push(job.data);
      console.log(jobApplied);
    }
  };

  handleGetJob();

  return <Fragment>{/* <JobList jobs={jobApplied} /> */}</Fragment>;
  //
};

export default Application;
