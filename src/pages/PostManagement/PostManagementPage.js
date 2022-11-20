import PostManagement from "./Components/PostManagement";
import locationImg from "../../asses/google.png"
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import { useSelector } from "react-redux";

const CV = [
  {
      id: 1,
      avatar: locationImg,
      userName: 'Username',
      experience: 'Senior Design',
      age: 'XX',
      minSalary: '700',
      maxSalary: '1500',
      jobType: 'Part Time',
      skills: ['Senior Designer', 'Full-Time'],
  },
]

const PostManagementPage = () => {
  const [job, setJob] = useState();
  const userStore = useSelector((state) => state.auth.login?.currentUser);

  useEffect(() => {
    axios.get(`${config.api.url}/job/all-mine`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        console.log(res.data);
        setJob(res.data);
    });
  }, [userStore]);

  let jobs = [];
  if (job) {
    jobs = job.map((job) => {
        let tags = job.tags.replace(" ", '').split(",")
        tags = tags.slice(0, 7)
        return {
            id: job.id,
            logo: job.imageUrl,
            jobName:job.title,
            // companyName: job.authorName,
            // location: job.authorAddress,
            jobType: job.typeOfWorking,
            experience: job.exp,
            salary: job.salary,
            skills: tags,
        }
    })
  }
  console.log(jobs)
    return (
      <PostManagement cvs={CV} jobs={jobs} />
    );
  };
  
  export default PostManagementPage;
  