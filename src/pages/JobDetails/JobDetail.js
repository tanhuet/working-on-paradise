import React from "react";
import HomeBackground from "../../components/Layout/HomeBackground2";
import HighlightJob from "./Components/JobDetails/HighlightJob";

const JobDetail = () => {
  return (
    <React.Fragment>
      <HomeBackground />
      {/* <Overview /> */}
      <HighlightJob />
    </React.Fragment>
  );
};

export default JobDetail;
