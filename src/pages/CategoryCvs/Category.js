import { Fragment, useEffect, useState } from "react";
// import Card from "../../components/UI/Card"
import CategoryTop from "./Components/CategoryTop";
import JobList from "./Components/JobList";
import { useSelector } from "react-redux";
import config from "../../config";
import axios from "axios";
import Contact from "./Components/Contact";
// import locationImg from "../../asses/img-location.png"

const CategoryCvs = () => {
  //state
  const [page, setPage] = useState(5);

  //get API
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [entireJobs, setEntireJobs] = useState();

  //panigator
  const nextPageHandler = () => {
    setPage((pre) => {
      return pre + 5;
    });
  };

  // const prePageHandler = () => {
  //     setPage(pre => {
  //         if (pre > 1) {
  //             return pre - 1
  //         } else {
  //             return pre
  //         }
  //     })
  // }

  useEffect(() => {
    axios
      .get(
        `${config.api.url}/employer/recommend-jobseeker/${page.toString()}`,
        {
          headers: { Authorization: `Bearer ${userStore.accessToken}` },
        }
      )
      .then((res) => {
        setEntireJobs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userStore, page]);
  // convert api to object
  let jobs = [];
  let topJobs = [];
  if (entireJobs) {
    jobs = entireJobs.map((job) => {
      let tags = job.careerFeild.replace(" ", "").split(",");
      return {
        id: job.id,
        logo: job.avatar,
        companyName: job.username,
        location: job.address,
        category: job.username,
        jobType: job.typeOfJob,
        experience: job.experience,
        salary: job.salary,
        age: job.age,
        skills: tags,
      };
    });

    if (jobs) {
      topJobs = jobs.slice(0, 3);
      topJobs = topJobs.map((job) => {
        // let tags = job.tags.replace(" ", '').split(",")
        let tags = job.skills.slice(0, 3);
        return {
          id: job.id,
          logo: job.logo,
          companyName: job.companyName,
          location: job.location,
          category: job.category,
          jobType: job.jobType,
          experience: job.experience,
          salary: job.salary,
          age: job.age,
          skills: tags,
        };
      });
    }
  }
  const CONTACT = {
    hotline: "024 037547865",
    company:
      "E3, VietNam University of Ha Noi, 144 Xuan Thuy, Cau Giay, Ha Noi",
    email: "uet@vnu.edu.vn",
  };
  return (
    <Fragment>
      <CategoryTop jobs={topJobs} entireJobs={jobs} />
      <JobList jobs={jobs} onNextPage={nextPageHandler} />
      <Contact contact={CONTACT} />
    </Fragment>
  );
  //
};

export default CategoryCvs;
