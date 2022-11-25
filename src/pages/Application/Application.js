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
        // console.log(res.data);
        setApplication(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userStore]);

  return (
    <Fragment>
      <JobList application={application} />
    </Fragment>
  );
  //
};

export default Application;
