import PostManagement from "./Components/PostManagement";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import { useSelector } from "react-redux";

const PostManagementPage = () => {
  const [job, setJob] = useState();
  const [profile, setProfile] = useState();
  const userStore = useSelector((state) => state.auth.login?.currentUser);

  useEffect(() => {
    axios.get(`${config.api.url}/job/all-mine`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        setJob(res.data);
      });

    axios.get(`${config.api.url}/employer/recommend-jobseeker/3`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        console.log(res.data)
        setProfile(res.data);
      });

  }, [userStore]);

  let jobs = [];
  if (job) {
    jobs = job.slice(0, 3)
    jobs = jobs.map((job) => {
      let tags = job.tags.replace(" ", '').split(",")
      tags = tags.slice(0, 7)
      return {
        id: job.id,
        logo: job.authorAvatar,
        jobName: job.title,
        companyName: job.authorName,
        positions: job.positions,
        location: job.authorAddress,
        jobType: job.typeOfWorking,
        candidates: job.slots,
        experience: job.exp,
        salary: job.salary,
        skills: tags,
      }
    })
  }

  let profiles = [];
  if (profile) {
    profiles = profile.map((profile ) => {
      let advanedSkill = profile.advanedSkill.replace(" ", '').split(",")
      advanedSkill = advanedSkill.slice(0, 2)
      return {
        id: profile.id,
        avatar: profile.avatar,
        userName: profile.username,
        experience: profile.experience,
        age: profile.age,
        salary: profile.salary,
        jobType: profile.typeOfJob,
        skills: advanedSkill,
      }
    })
  }

  return (
    <PostManagement profiles={profiles} jobs={jobs} />
  );
};

export default PostManagementPage;
