import classes from "./JobList.module.scss";
import Wrap from "../../../components/UI/Wrap";
import JobCard from "../../../components/job-card/JobCard";
import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config";

const JobList = (props) => {
  const [listJob, setListJob] = useState([]);

  useEffect(() => {
    for (let ap of props.application) {
      console.log(ap);
      axios.get(`${config.api.url}/job/${ap.jobId}`).then((res) => {
        console.log(res.data);
        setListJob((pre) => {
          return [...pre, res.data];
        });
      });
    }
  }, [listJob]);

  return (
    <div className={classes.main}>
      <Wrap className={classes["job-list"]}>
        <div className={classes.title}>
          <p>Applied Job's posts</p>
        </div>
        <div className={classes.list}>
          {listJob.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              logo={job.authorAvatar}
              companyName={job.authorName}
              location={job.authorAddress}
              category={job.tags}
              jobType={job.typeOfWorking}
              skills={job.tags}
              experience={job.tags}
              salary={job.salary}
            />
          ))}
        </div>
      </Wrap>
    </div>
  );
};

export default JobList;
