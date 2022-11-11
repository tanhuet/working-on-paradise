import { Fragment } from "react";
// import Card from "../../components/UI/Card"
import CategoryTop from "./Components/CategoryTop";
import JobList from "./Components/JobList";
import Contact from "./Components/Contact";
import locationImg from "../../asses/googleicon.png";

const DUMYJOB = [
  {
    id: 1,
    logo: locationImg,
    companyName: "Google Inc",
    location: "California",
    category: "UI/UX Desgin",
    jobType: "Part Time",
    experience: "Senior",
    minSalary: "700",
    maxSalary: "1500",
    skills: ["Skill", "Designer", "Full-time"],
  },
  {
    id: 2,
    logo: locationImg,
    companyName: "Google Inc",
    location: "California",
    category: "UI/UX Desgin",
    jobType: "Part Time",
    experience: "Senior",
    minSalary: "700",
    maxSalary: "1500",
    skills: ["Skill", "Designer", "Full-time"],
  },
  {
    id: 3,
    logo: locationImg,
    companyName: "Google Inc",
    location: "California",
    category: "UI/UX Desgin",
    jobType: "Part Time",
    experience: "Senior",
    minSalary: "700",
    maxSalary: "1500",
    skills: ["Skill", "Designer", "Full-time"],
  },
  {
    id: 4,
    logo: locationImg,
    companyName: "Google Inc",
    location: "California",
    category: "UI/UX Desgin",
    jobType: "Part Time",
    experience: "Senior",
    minSalary: "700",
    maxSalary: "1500",
    skills: ["Skill", "Designer", "Full-time"],
  },
];
const DUMYJOB1 = [
  {
    id: 1,
    logo: locationImg,
    companyName: "Google Inc",
    location: "California",
    category: "UI/UX Desgin",
    jobType: "Part Time",
    experience: "Senior",
    minSalary: "700",
    maxSalary: "1500",
    skills: ["Skill", "Designer", "Full-time"],
  },
  {
    id: 2,
    logo: locationImg,
    companyName: "Google Inc",
    location: "California",
    category: "UI/UX Desgin",
    jobType: "Part Time",
    experience: "Senior",
    minSalary: "700",
    maxSalary: "1500",
    skills: ["Skill", "Designer", "Full-time"],
  },
  {
    id: 3,
    logo: locationImg,
    companyName: "Google Inc",
    location: "California",
    category: "UI/UX Desgin",
    jobType: "Part Time",
    experience: "Senior",
    minSalary: "700",
    maxSalary: "1500",
    skills: ["Skill", "Designer", "Full-time"],
  },
];
const CONTACT = {
  hotline: "024 037547865",
  company: "E3, VietNam University of Ha Noi, 144 Xuan Thuy, Cau Giay, Ha Noi",
  email: "uet@vnu.edu.vn",
};
const DUMYRECOMENDED = [
  {
    id: "1",
    companyName: "Google Inc",
    logo: locationImg,
    jobs: [
      {
        id: "1",
        category: "UI/UX Desgin",
        jobType: "Part Time",
        location: "California",
      },
      {
        id: "2",
        category: "UI/UX Desgin",
        jobType: "Part Time",
        location: "California",
      },
    ],
  },
];

const EmployerCv = () => {
  return (
    <Fragment>
      <CategoryTop jobs={DUMYJOB1} />
      <JobList jobs={DUMYJOB} recomendedJobs={DUMYRECOMENDED} />
      <Contact contact={CONTACT} />
    </Fragment>
  );
};

export default EmployerCv;
