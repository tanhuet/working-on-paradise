import { Fragment, useEffect, useState } from "react";
import JobList from "./Components/JobList";
import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
import Banner from "./Components/Banner";
import classes from "./Application.module.scss";
import IdeaPosition from "../../components/IdeaPositionFooter/IdeaPositionFooter";
// import locationImg from "../../asses/img-location.png"
import google from "../../asses/google.png";

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

  const JOBS = [
    {
      id: 1,
      logo: google,
      companyName: "Google Inc",
      location: "California",
      category: "UI/UX Desgin",
      jobType: "Part Time",
      experience: "Senior",
      minSalary: "700",
      maxSalary: "1500",
      skills: ["cloud", "react"],
    },
  ];

  return (
    <Fragment>
      <div className={classes.wrapper}>
        <Banner />
        <JobList application={application} />
        <IdeaPosition jobs={JOBS} />
      </div>
    </Fragment>
  );
  //
};

export default Application;
