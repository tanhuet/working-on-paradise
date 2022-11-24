import { Fragment, useEffect, useState } from "react";
import Offer from "./detail/Offer";
import Highlight from "./overview/Highlight";
import Requirement from "./detail/Requirement";
import About from "./detail/About";
import axios from "axios";
import Benefit from "./detail/Benefit";
import React from "react";
function createString(Strings, text) {
  const description = Strings?.split(text);
  return description;
}
const HighlightJob = () => {
  const [persons, setPerson] = useState({});
  const [clickStatus, setStatus] = useState(false);
  const [button, setButton] = useState("Apply");
  const curUrl = window.location.href;
  const id = curUrl.split("details/")[1];
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get(`https://tanhuet.site/job/${id}`)
        .catch((error) => console.log(error));
      setPerson(response.data);
    };
    fetchData();
  }, []);
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
  };

  const description = createString(persons.description, "\n");
  const requirements = createString(persons.requirements, "\n");
  const about = createString(persons.authorAbout, "\n");
  const benefit = createString(persons.benefits, "\n");
  let BENEFIT = {
    handleFuntion: callbackHandlerFunction,
    benefit: benefit,
    button: button,
    id: id,
    status: clickStatus,
  };
  return (
    <Fragment>
      <Highlight skills={PERSON} />
      <Offer abc={description} />
      <Requirement req={requirements} />
      <About about={about} />
      <Benefit benefit={BENEFIT} />
      {/* <Comment /> */}
    </Fragment>
  );
};

export default HighlightJob;
