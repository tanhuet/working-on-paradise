import React from "react";
import HomeBackground from "../../components/layout/HomeBackground2";
import HighlightJob from "./Components/job-detail/HighlightJob";

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
