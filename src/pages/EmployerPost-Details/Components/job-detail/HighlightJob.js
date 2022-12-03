import { Fragment, useEffect, useState } from "react";
import Offer from "./detail/Offer";
import Highlight from "./overview/Highlight";
import Requirement from "./detail/Requirement";
import About from "./detail/About";
import axios from "axios";
import Comment from "./detail/Comment";
import React from "react";
import Docs from "./Docs";
import { useSelector, useStore } from "react-redux";
import config from "../../../../config";
function createString(Strings, text) {
  const description = Strings?.split(text);
  return description;
}
const HighlightJob = () => {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [persons, setPerson] = useState({});
  const [clickStatus, setStatus] = useState(false);
  const [save, setSave] = useState(false);
  const [button, setButton] = useState("Edit");
  const curUrl = window.location.href;
  const [mark, setMark] = useState();
  const id = curUrl.split("employer-post/")[1];
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${config.api.url}/job/${id}`).catch((error) => console.log(error));
      setPerson(response.data);
      if (useStore.role === "JobSeeker") {
        const marks = await axios
          .get(`${config.api.url}/job/${id}/marked`, {
            headers: { Authorization: `Bearer ${userStore.accessToken}` },
          })
          .catch((error) => console.log(error));
        setMark(marks?.data);
      }
    };
    fetchData();
  }, [clickStatus]);
  const callbackSavehandle = (status) => {
    setSave(status);
  };
  const callbackHandlerFunction = (status, buttonIdea) => {
    setStatus(status);
    setButton(buttonIdea);
  };

  const skills = createString(persons.positions, "/");
  let DOCS = {
    status: clickStatus,
    id: id,
    save: save,
    saveFuntion: callbackSavehandle,
    callbackHandlerFunction: callbackHandlerFunction,
    skill: skills,
    jobType: persons.authorName,
    icon: persons.authorAvatar,
    address: persons.authorAddress,
    daysPost: "2",
    salary: persons.salary,
    quantity: persons.slots,
    typeOfWorking: persons.typeOfWorking,
    gender: persons.gender !== "" ? persons.gender : "No Requirement",
    positions: persons.positions,
    startTime: persons.startTime,
    endTime: persons.endTime,
    title: persons.title,
    tags: persons.tags,
    imageUrl: persons.imageUrl,
    exp: persons.exp,
    button: button,
    description: persons.description,
    requirements: persons.requirements,
    benefits: persons.benefits,
    about: persons.authorAbout,
  };
  let PERSON = {
    handleFuntion: callbackHandlerFunction,
    saveFun: callbackSavehandle,
    skill: skills,
    jobType: persons.authorName,
    icon: persons.imageUrl,
    address: persons.authorAddress,
    imageUrl: persons.imageUrl,
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
    save: save,
    bookmark: mark,
  };

  const description = createString(persons.description, "\n");
  const requirements = createString(persons.requirements, "\n");
  const about = createString(persons.authorAbout, "\n");

  return (
    <Fragment>
      {!clickStatus && !save && <Highlight skills={PERSON} />}
      {!clickStatus && !save && <Offer abc={description} />}
      {!clickStatus && !save && <Requirement req={requirements} />}
      {!clickStatus && !save && <About about={about} />}
      {!clickStatus && !save && <Comment comment={persons.author} />}
      {clickStatus && !save && <Docs docs={DOCS} />}
    </Fragment>
  );
};

export default HighlightJob;
