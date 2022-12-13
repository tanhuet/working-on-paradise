import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
import Banner from "./Components/Banner";
import classes from "./AppliedCv.module.scss";

// import locationImg from "../../asses/img-location.png"
import UserComment from "../EmployerPostDetails/Components/JobDetails/Details/UserComment";

const AppliedCv = () => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [application, setApplication] = useState();

  const [status, setStatus] = useState(false);

  useEffect(() => {
    axios
      .get(`${config.api.url}/application/mine`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        setApplication(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userStore, application]);

  const handleFuntion = (status) => {
    setStatus(status);
  };

  const listItem1 = application?.filter((item) => item.status === "pending");
  const listApplication = listItem1?.map((item) => <UserComment data={item} key={item.toString()} status={handleFuntion} />);
  return (
    <Fragment>
      <div className={classes.wrapper}>
        <Banner />
        <div className={classes.des}>
          <div className={classes.card}>
            <div className={classes.headname}>
              <h3>Applied Cvs</h3>
            </div>
            <div className={classes.company}>{listApplication}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
  //
};

export default AppliedCv;
