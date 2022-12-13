import { Fragment, useEffect, useState } from "react";
import Offer from "./Details/Offer";
import Highlight from "./OverView/Highlight";
import Requirement from "./Details/Requirement";
import About from "./Details/About";
import axios from "axios";
import Comment from "./Details/Comment";
import React from "react";
import Docs from "./Docs";
import Benefit from "./Details/Benefits";
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
      const response = await axios
        .get(`${config.api.url}/job/${id}`)
        .catch((error) => console.log(error));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickStatus]);
  const callbackSavehandle = (status) => {
    setSave(status);
  };
  const callbackHandlerFunction = (status, buttonIdea) => {
    setStatus(status);
    setButton(buttonIdea);
  };
  const [title, setTittle] = useState(persons.title);
  const [img, setImg] = useState(persons.authorAvatar);
  const callbackDataWhileSave = (title, file) => {
    setTittle(title);
    setImg(file);
  };

  const skills = createString(persons.positions, "/");
  let DOCS = {
    status: clickStatus,
    id: id,
    save: save,
    saveFuntion: callbackSavehandle,
    callbackHandlerFunction: callbackHandlerFunction,
    skill: skills,
    jobType: persons.title,
    company: persons.authorName,
    icon: img,
    address:
      persons.authorAddress === "undefined"
        ? "undefined address"
        : persons.authorAddress?.trim().length === 0
        ? "undefined address"
        : persons.authorAddress,
    daysPost: Math.abs(
      new Date().getDate() - new Date(persons.createdAt).getDate()
    ),
    salary: persons.salary,
    quantity: persons.slots,
    typeOfWorking: persons.typeOfWorking,
    gender: persons.gender !== "" ? persons.gender : "No Requirement",
    positions: persons.positions,
    startTime: persons.startTime,
    endTime: persons.endTime,
    title: title,
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
    handleTitleImg: callbackDataWhileSave,
    saveFun: callbackSavehandle,
    skill: skills,
    jobType: persons.title,
    company: persons.authorName,
    icon: persons.authorAvatar,
    imageUrl: persons.imageUrl,
    address:
      persons.authorAddress === "undefined"
        ? "undefined address"
        : persons.authorAddress?.trim().length === 0
        ? "undefined address"
        : persons.authorAddress,
    daysPost: -new Date().getDate() + new Date(persons.createdAt).getDate(),
    salary: persons.salary,
    quantity: persons.slots,
    authorId: persons.author,
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
  const benefit = createString(persons.benefits, "\n");
  return (
    <Fragment>
      {<Highlight skills={PERSON} />}
      {!clickStatus && !save && <Offer abc={description} />}
      {!clickStatus && !save && <Requirement req={requirements} />}

      {!clickStatus && !save && <About about={about} />}
      {!clickStatus && !save && <Benefit req={benefit} />}
      {!clickStatus && !save && <Comment comment={id} />}
      {clickStatus && !save && <Docs docs={DOCS} />}
    </Fragment>
  );
};

export default HighlightJob;
