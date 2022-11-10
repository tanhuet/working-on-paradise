import React from "react";
import HomeBackground from "../../components/layout/HomeBackground";
import HighlightJob from "./Components/job-detail/HighlightJob";

const EmployerDetails = () => {
  return (
    <React.Fragment>
      <HomeBackground />
      {/* <Overview /> */}
      <HighlightJob />
    </React.Fragment>
  );
};

export default EmployerDetails;
