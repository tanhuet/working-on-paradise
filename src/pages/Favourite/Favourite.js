import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import classes from "./Favourite.module.scss"
import FavouriteJob from "./Components/FavouriteJob";
import RecommendedJobs from "./Components/RecommendedJobs"

const Favourite = () => {
  //get API
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [entireJobs, setEntireJobs] = useState();
  const [recomendedJobs, setRecomendJobs] = useState(null);

    // dependency
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    let filter = queryParams.get('filter')
    if (filter !== null && filter !== undefined && filter.length > 0) {
      filter = filter.replace('/', '%2F')
    }

  const { innerWidth: width } = window;

  useEffect(() => {
    if (userStore.role === "JobSeeker") {
      if (filter !== null && filter.length > 0) {
        axios.get(`${config.api.url}/job/favourite/find-by-keyword/${filter}/7/1`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
          .then((res) => {
            setEntireJobs(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
      axios
        .get(`${config.api.url}/job/list-marked`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
        .then((res) => {
          setEntireJobs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }
      axios
        .get(`${config.api.url}/job/recommend/1`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
        .then((res) => {
          setRecomendJobs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userStore, filter]);

  // convert api to object
  let jobs = [];
  if (entireJobs) {
    jobs = entireJobs.map((job) => {
        let tags = job.tags.replace(" ", '').split(",")
        if (width < 1050) {
          tags = tags.slice(0, 5)
        } else {
          tags = tags.slice(0, 6)
        }
        return {
            id: job.id,
            logo: job.authorAvatar,
            companyName: job.authorName,
            location: job.authorAddress,
            category: job.title,
            jobType: job.typeOfWorking,
            experience: job.exp,
            salary: job.salary,
            skills: tags,
            bookmark: job.bookmark,
        }
    })
  }

  let rJ = []
  if (recomendedJobs !== null) {
      rJ = recomendedJobs.map((job) => {
          return {
              id: job.author,
              companyName: job.authorName,
              logo: job.authorAvatar,
              jobName: job.title,
              address: job.authorAddress,
              position: job.positions,
              salary: job.salary,
              jobType: job.typeOfWorking,
              slot: job.slots,
          }
      })
      // setRecomendJobs(rJ)
  }

  return (
    <div className={classes.wrap}>
      <FavouriteJob jobs={jobs} />
      <RecommendedJobs recomendedJobs={rJ}/>
    </div>
  );
};

export default Favourite;
