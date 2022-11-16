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
  const skills = createString(persons.positions, "/");
  let PERSON = {
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
  };
  const description = createString(persons.description, "\n");
  const requirements = createString(persons.requirements, "\n");
  const about = createString(persons.authorAbout, "\n");
  const benefit = createString(persons.benefits, "\n");
  return (
    <Fragment>
      <Highlight skills={PERSON} />
      <Offer abc={description} />
      <Requirement req={requirements} />
      <About about={about} />
      <Benefit benefit={benefit} />
      {/* <Comment /> */}
    </Fragment>
  );
};

export default HighlightJob;
