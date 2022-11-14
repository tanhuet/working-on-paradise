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

const DUMYPOST = [
  {
      id: 1,
      logo: locationImg,
      jobName: 'Google Inc',
      company: 'Company',
      location: 'Location',
      typeOfJob: 'Type of Job',
      typeOfWorkplace: 'Type of Workplace',
      salary: 'Salary',
      candidates: 'X candidates applied',
      skills: ['Skill', 'Designer', 'FullTime'],
  },
]
const PostManagementPage = () => {
  // const [job, setJob] = useState();
  // const userStore = useSelector((state) => state.auth.login?.currentUser);

  // useEffect(() => {
  //   axios.get(`${config.api.url}/job/all-mine`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
  //     .then((res) => {
  //       console.log(res.data);
  //       setJob(res.data);
  //   });
  // }, [userStore]);
    return (
      <PostManagement cvs={CV} posts={DUMYPOST} />
    );
  };
  
  export default PostManagementPage;
  