import { Fragment, useState, useEffect } from "react";
import CvDetail from "./CvDetail";
import EditCv from "./EditCv";
import { useSelector } from "react-redux"
import config from "../../config"
import axios from "axios"

const CvDetailPage = () => {

  const [isEdit, setIsEdit] = useState(false);
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [profile, setProfile] = useState(null)

  //fetch API current jobseeker
  useEffect(() => {
    const EXPERIENCE = [
      {
        id: "1",
        company: "",
        startDate: new Date("2000-10-10"),
        endDate: new Date("2000-10-10"),
        position: "",
        description: ""
      },
      {
        id: "2",
        company: "",
        startDate: new Date("2000-10-10"),
        endDate: new Date("2000-10-10"),
        position: "",
        description: ""
      },
    ]
    const ACTIVITIES = [
      {
        id: "1",
        organization: "",
        startDate: new Date("2020-10-10"),
        endDate: new Date("2020-10-10"),
        position: "",
        description: ""
      },
    ]
    const EDUCATION = [
      {
        id: "1",
        school: "",
        startDate: new Date("2020-10-10"),
        endDate: new Date("2020-10-10"),
        position: "",
        description: ""
      },
    ]
    const SKILLS = [
      {
        id: "1",
        skill: "",
        description: ""
      },
      {
        id: "2",
        skill: "",
        description: ""
      },
    ]
    if (userStore && userStore.role === 'JobSeeker') {
      axios.get(`${config.api.url}/jobseeker`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
          .then((res) => {
              const profile = res.data
              setProfile({
                id: profile.id,
                logo: profile.avatar,
                name: profile.name,
                nameUser: profile.name,
                age: profile.age,
                phone: profile.phone,
                email: profile.email,
                website: "none",
                address: profile.address,
                sex: profile.gender,
                experience: EXPERIENCE,
                activities: ACTIVITIES,
                education: EDUCATION,
                skills: SKILLS
              })
          })
          .catch(err => {
              console.log(err)
          });
    }
  }, [userStore])

  const editHandler = (isEdit) => {
    setIsEdit(isEdit);
  };

  const viewHandler = (isEdit) => {
    setIsEdit(isEdit);
  };

  const saveInfoHandler = (cv) => {
    setProfile(cv)
  }

  return (
    <Fragment>
      {!isEdit && profile !== null && <CvDetail cv={profile} onEdit={editHandler} />}
      {isEdit && profile !==null && <EditCv cv={profile} onEdit={viewHandler} save={saveInfoHandler} />}
    </Fragment>
  );
};

export default CvDetailPage;
