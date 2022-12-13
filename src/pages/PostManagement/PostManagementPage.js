import PostManagement from "./Components/PostManagement";
import { useState, useEffect } from "react";
import axios from "axios";
import config from "../../config";
import { useSelector } from "react-redux";

const PostManagementPage = () => {
  const [job, setJob] = useState();
  const [firstList, setFirstList] = useState(0);
  const [lastList, setLastList] = useState(5);
  const [profile, setProfile] = useState();
  const userStore = useSelector((state) => state.auth.login?.currentUser);

  useEffect(() => {
    axios.get(`${config.api.url}/job/all-mine`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        setJob(res.data);

      });

    axios.get(`${config.api.url}/employer/recommend-jobseeker/3`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
      .then((res) => {
        setProfile(res.data);
      });

  }, [userStore]);

  const nextList = () => {
    setFirstList((firstList) => {
      return firstList + 5;
    });
    setLastList((lastList) => {
      return lastList + 5;
    });
  };

  const preList = () => {
    if (firstList !== 0) {
      setFirstList((firstList) => {
        return firstList - 5;
      });
      setLastList((lastList) => {
        return lastList - 5;
      });
    }
  };

  let jobs = [];

  if (job) {
    jobs = job.slice(firstList, lastList)
    jobs = jobs.map((job) => {
      let tags = job.tags.replace(" ", '').split(",")
      tags = tags.slice(0, 5)
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
    profiles = profile.map((profile) => {
      let careerFeild = profile.careerFeild.replace(" ", '').split(",")
      careerFeild = careerFeild.slice(0, 2)
      return {
        id: profile.id,
        avatar: profile.avatar,
        userName: profile.username,
        experience: profile.experience,
        age: profile.age,
        salary: profile.salary,
        jobType: profile.typeOfJob,
        skills: careerFeild,
      }
    })
  }

  return (
    <PostManagement profiles={profiles} jobs={jobs} onNextList={nextList} onPreList={preList} />
  );
};

export default PostManagementPage;
