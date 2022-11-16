import CVPage from "./Component/CV-page";
import address from "../../asses/address.png";
import google from "../../asses/google.png";
const Cv = () => {
  const CVS = [
    {
      id: 1,
      title: "CV 1",
      lastUpdate: "2 days ago",
    },
  ];
  const ITEMS = [
    {
      id: "1",
      companyName: "NatWest. Group",
      logo: address,
      jobs: [
        {
          id: "1",
          category: "Enterprise Architect",
          jobType: "London, UK",
          location: "NatWest. Group",
        },
        {
          id: "2",
          category: "Privacy Officer",
          jobType: "London, UK",
          location: "NatWest. Group",
        },
      ],
    },
  ];
  const JOBS = [
    {
      id: 1,
      logo: google,
      companyName: "Google Inc",
      location: "California",
      category: "UI/UX Desgin",
      jobType: "Part Time",
      experience: "Senior",
      minSalary: "700",
      maxSalary: "1500",
      skills: ["cloud", "react"],
    },
  ];
  return <CVPage cvs={CVS} items={ITEMS} jobs={JOBS} />;
};

export default Cv;
