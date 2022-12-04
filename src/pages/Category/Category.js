import { Fragment, useEffect, useState } from "react";
// import Card from "../../components/UI/Card"
import CategoryTop from "./Components/CategoryTop";
import JobList from "./Components/JobList";
import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
// import locationImg from "../../asses/img-location.png"

const Category = () => {
  //state
  const [page, setPage] = useState(1);

  //get API
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [entireJobs, setEntireJobs] = useState();
  const [recomendedJobs, setRecomendJobs] = useState(null);

  const { innerWidth: width } = window;

  //panigator
  const nextPageHandler = () => {
    setPage((pre) => {
      return pre + 1;
    });
  };

  const prePageHandler = () => {
    setPage((pre) => {
      if (pre > 1) {
        return pre - 1;
      } else {
        return pre;
      }
    });
  };

  useEffect(() => {
    if (userStore) {
      axios
        .get(`${config.api.url}/job/getPageSuggestion/7/${page.toString()}`, {
          headers: { Authorization: `Bearer ${userStore.accessToken}` },
        })
        .then((res) => {
          setEntireJobs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(`${config.api.url}/job/getPageSuggestion/7/${page.toString()}`)
        .then((res) => {
          setEntireJobs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    if (userStore) {
      if (userStore.role === "JobSeeker")
        axios
          .get(`${config.api.url}/job/recommend/3`, {
            headers: { Authorization: `Bearer ${userStore.accessToken}` },
          })
          .then((res) => {
            setRecomendJobs(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
    }
  }, [userStore, page]);
  // convert api to object
  let jobs = [];
  let topJobs = [];
  if (entireJobs) {
    jobs = entireJobs.map((job) => {
      let tags = job.tags.replace(" ", "").split(",");
      if (width <= 1111) {
        tags = tags.slice(0, 5);
      } else {
        tags = tags.slice(0, 6);
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
      };
    });
    console.log(jobs);
    if (jobs) {
      if (width <= 1000) {
        topJobs = jobs.slice(0, 2);
      } else {
        topJobs = jobs.slice(0, 3);
      }
      topJobs = topJobs.map((job) => {
        // let tags = job.tags.replace(" ", '').split(",")
        let tags = job.skills.slice(0, 2);
        return {
          id: job.id,
          logo: job.logo,
          companyName: job.companyName,
          location: job.location,
          category: job.category,
          jobType: job.jobType,
          experience: job.experience,
          salary: job.salary,
          skills: tags,
          bookmark: job.bookmark,
        };
      });
    }
  }
  let rJ = [];
  if (recomendedJobs !== null) {
    rJ = recomendedJobs.map((job) => {
      return {
        id: job.id,
        companyName: job.authorName,
        logo: job.authorAvatar,
        jobName: job.title,
        address: job.authorAddress,
        position: job.positions,
        salary: job.salary,
        jobType: job.typeOfWorking,
        slot: job.slots,
      };
    });
    // setRecomendJobs(rJ)
  }

  return (
    <Fragment>
      <CategoryTop jobs={topJobs} entireJobs={jobs} />
      <JobList
        jobs={jobs}
        recomendedJobs={rJ}
        onNextPage={nextPageHandler}
        onPrePage={prePageHandler}
      />
    </Fragment>
  );
  //
};

export default Category;
