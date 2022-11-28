import { Fragment, useState } from "react"
import { useEffect } from "react"
import config from "../../../config"
import axios from "axios"
import { useSelector } from "react-redux"

import locationImg from "../../../asses/img-location.png"
import CvList from "./highlight-cv/CvList"
import JobPosting from "./highlight-cv/JobPosting"
import OfferList from "./highlight-cv/OfferList"
import Personnel from "./highlight-cv/Personnel"

const DUMYJOB = [
    {
        id: 1,
        logo: locationImg,
        companyName: 'Google Inc',
        location: 'California',
        category: 'UI/UX Desgin',
        jobType: 'Part Time',
        experience: 'Senior',
        minSalary: '700',
        maxSalary: '1500',
        skills: ['cloud', 'react'],
    },
]

const HighlightCv = () => {
    const [profile, setProfile] = useState();
    
    const userStore = useSelector((state) => state.auth.login?.currentUser);
  
    useEffect(() => {
      axios.get(`${config.api.url}/employer/recommend-jobseeker/3`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
        .then((res) => {
          setProfile(res.data);
        });
  
    }, [userStore]);

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
        <Fragment>
            <CvList jobs={profiles}/>
            <JobPosting />
            <OfferList jobs={DUMYJOB}/>
            <Personnel />
        </Fragment>
    )
}

export default HighlightCv