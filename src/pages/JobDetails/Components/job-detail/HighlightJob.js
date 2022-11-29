import { Fragment, useEffect, useState } from "react";
import Offer from "./detail/Offer";
import Highlight from "./overview/Highlight";
import Requirement from "./detail/Requirement";
import About from "./detail/About";
import axios from "axios";
import Benefit from "./detail/Benefit";
import React from "react";
import { useSelector } from "react-redux";
function createString(Strings, text) {
  const description = Strings?.split(text);
  return description;
}
const HighlightJob = () => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [persons, setPerson] = useState({});
  const [recommend, setRecomend] = useState();
  const [clickStatus, setStatus] = useState(false);
  const [button, setButton] = useState("Apply");
  const [mark, setMark] = useState();
  const [redirect, setRedirect] = useState(false);
  const curUrl = window.location.href;
  const id = curUrl.split("details/")[1];
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`https://tanhuet.site/job/${id}`)
        .catch((error) => console.log(error));
      setPerson(response.data);
      const jobRecomend = await axios
        .get(`https://tanhuet.site/job/recommend/5`)
        .catch((error) => console.log(error));
      setRecomend(jobRecomend.data);
      const marks = await axios
        .get(`https://tanhuet.site/job/${id}/marked`, {
          headers: { Authorization: `Bearer ${userStore.accessToken}` },
        })
        .catch((error) => console.log(error));
      setMark(marks.data);
    };
    fetchData();
  }, [redirect]);
  const callbackRedirectFuntion = (redirect) => {
    setRedirect(redirect);
  };
  const callbackHandlerFunction = (status) => {
    if (status === true) {
      setButton("Applied");
      setStatus(true);
    }
  };
  const skills = createString(persons.positions, "/");
  let PERSON = {
    handleFuntion: callbackHandlerFunction,
    skill: skills,
    jobType: persons.authorName,
    icon: persons.authorAvatar,
    imageUrl: persons.imageUrl,
    address: persons.authorAddress,
    daysPost: "2",
    salary: persons.salary,
    quantity: persons.slots,
    typeOfWorking: persons.typeOfWorking,
    gender: persons.gender !== "" ? persons.gender : "No Requirement",
    positions: persons.positions,
    exp: persons.exp,
    button: button,
    status: clickStatus,
    id: id,
    bookmark: mark,
  };

  const description = createString(persons.description, "\n");
  const requirements = createString(persons.requirements, "\n");
  const about = createString(persons.authorAbout, "\n");
  const benefit = createString(persons.benefits, "\n");
  let REQUIREMENT = {
    requirements: requirements,
    redirect: redirect,
    handleFuntion: callbackRedirectFuntion,
    recommend: {
      logo: recommend?.[3].authorAvatar,
      title: recommend?.[3].title,
      authorName: recommend?.[3].authorName,
      authorAddress: recommend?.[3].authorAddress,
      salary: recommend?.[3].salary,
      quantity: recommend?.[3].slots,
      typeOfWorking: recommend?.[3].typeOfWorking,
      positions: recommend?.[3].positions,
      id: recommend?.[3].id,
    },
  };
  let DESCRIPTIONS = {
    description: description,
    redirect: redirect,
    handleFuntion: callbackRedirectFuntion,
    recommend1: {
      logo: recommend?.[1].authorAvatar,
      title: recommend?.[1].title,
      authorName: recommend?.[1].authorName,
      authorAddress: recommend?.[1].authorAddress,
      salary: recommend?.[1].salary,
      quantity: recommend?.[1].slots,
      typeOfWorking: recommend?.[1].typeOfWorking,
      positions: recommend?.[1].positions,
      id: recommend?.[1].id,
    },
    recommend2: {
      logo: recommend?.[2].authorAvatar,
      title: recommend?.[2].title,
      authorName: recommend?.[2].authorName,
      authorAddress: recommend?.[2].authorAddress,
      salary: recommend?.[2].salary,
      quantity: recommend?.[2].slots,
      typeOfWorking: recommend?.[2].typeOfWorking,
      positions: recommend?.[2].positions,
      id: recommend?.[2].id,
    },
  };
  let ABOUT = {
    about: about,
    redirect: redirect,
    handleFuntion: callbackRedirectFuntion,
    recommend: {
      logo: recommend?.[4].authorAvatar,
      title: recommend?.[4].title,
      authorName: recommend?.[4].authorName,
      authorAddress: recommend?.[4].authorAddress,
      salary: recommend?.[4].salary,
      quantity: recommend?.[4].slots,
      typeOfWorking: recommend?.[4].typeOfWorking,
      positions: recommend?.[4].positions,
      id: recommend?.[4].id,
    },
  };
  let BENEFIT = {
    handleFuntion: callbackHandlerFunction,
    redirect: redirect,
    handleFuntion2: callbackRedirectFuntion,
    benefit: benefit,
    button: button,
    id: id,
    status: clickStatus,
    recommend: {
      logo: recommend?.[0].authorAvatar,
      title: recommend?.[0].title,
      authorName: recommend?.[0].authorName,
      authorAddress: recommend?.[0].authorAddress,
      salary: recommend?.[0].salary,
      quantity: recommend?.[0].slots,
      typeOfWorking: recommend?.[0].typeOfWorking,
      positions: recommend?.[0].positions,
      id: recommend?.[0].id,
    },
  };
  return (
    <Fragment>
      <Highlight skills={PERSON} />
      <Offer abc={DESCRIPTIONS} />
      <Requirement req={REQUIREMENT} />
      <About about={ABOUT} />
      <Benefit benefit={BENEFIT} />
      {/* <Comment /> */}
    </Fragment>
  );
};

export default HighlightJob;
