import { useSelector } from "react-redux";
import CVPage from "./Component/CvPage";
import address from "../../asses/address.png";
import google from "../../asses/google.png";
import config from "../../config";
import axios from "axios";
import { useState, useEffect } from "react";
const Cv = () => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [recomendedJobs, setRecomendJobs] = useState(null);
  useEffect(() => {
    if (userStore.role === "JobSeeker") {
      axios
        .get(`${config.api.url}/job/recommend/1`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
        .then((res) => {
          setRecomendJobs(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [userStore]);

  const CVS = [
    {
      id: 1,
      title: "CV 1",
      lastUpdate: "2 days ago",
    },
  ];
  const ITEMS = [
    {
      id: "1",
      companyName: "NatWest. Group",
      logo: address,
      jobs: [
        {
          id: "1",
          category: "Enterprise Architect",
          jobType: "London, UK",
          location: "NatWest. Group",
        },
        {
          id: "2",
          category: "Privacy Officer",
          jobType: "London, UK",
          location: "NatWest. Group",
        },
      ],
    },
  ];
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

  let rJ = [];
  if (recomendedJobs !== null) {
    rJ = recomendedJobs.map((job) => {
      return {
        id: job.id,
        author: job.author,
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
  return <CVPage cvs={CVS} items={ITEMS} jobs={JOBS} recomendedJobs={rJ} />;
};

export default Cv;
