import { Fragment } from "react";
import FavouriteJob from "./Components/FavouriteJob";
import locationImg from "../../asses/img-location.png";
import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
import { useState, useEffect } from "react";

const DUMMY_JOB = [
  {
    id: "1",
    logo: locationImg,
    companyName: "Google Inc",
    location: "California",
    category: "UI/UX Desgin",
    jobType: "Part Time",
    skills: ["a", "b"],
    experience: "efsdfdfs",
    // minSalary: '1000',
    // maxSalary: '2000',
    salary: 1000,
  },
];

const Favourite = () => {
  //get API
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [entireJobs, setEntireJobs] = useState();
  const [recomendedJobs, setRecomendJobs] = useState();
  useEffect(() => {
    if (userStore.role === "JobSeeker") {
      axios
        .get(`${config.api.url}/job/all-mine`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
        .then((res) => {
          console.log(res.data);
          setEntireJobs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .get(`${config.api.url}/job/recommend/3`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
        .then((res) => {
          setRecomendJobs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userStore]);

  // convert api to object
  let jobs = [];
  if (entireJobs) {
    jobs = entireJobs.map((job) => {
      let tags = job.tags.replace(" ", "").split(",");
      tags = tags.slice(0, 7);
      return {
        id: job.id,
        logo: job.authorAvatar,
        companyName: job.authorName,
        location: job.authorAddress,
        category: job.title,
        jobType: job.typeOfWorking,
        experience: job.exp,
        minSalary: job.salary,
        maxSalary: job.salary,
        skills: tags,
      };
    });
  }
  let rJ = [];
  if (recomendedJobs) {
    console.log(recomendedJobs);
    rJ = recomendedJobs.map((job) => {
      return {
        id: job.id,
        companyName: job.authorName,
        logo: job.authorAvatar,
        jobs: [
          {
            id: "1",
            category: job.title,
            jobType: job.typeOfWorking,
            location: job.authorAddress,
          },
          {
            id: "2",
            category: job.title,
            jobType: job.typeOfWorking,
            location: job.authorAddress,
          },
        ],
      };
    });
    // setRecomendJobs(rJ)
  }

  return (
    <Fragment>
      <FavouriteJob jobs={DUMMY_JOB} />
      {/* <RecomendedJob /> */}
    </Fragment>
  );
};

export default Favourite;
