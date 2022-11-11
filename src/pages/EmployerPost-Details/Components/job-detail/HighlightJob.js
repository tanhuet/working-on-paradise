import { Fragment } from "react";
import Offer from "./detail/Offer";
import Highlight from "./overview/Highlight";
import Requirement from "./detail/Requirement";
import About from "./detail/About";
import Comment from "./detail/Comment";
import docsDescription from "./Docs";

const HighlightJob = () => {
  return (
    <Fragment>
      <Highlight />
      <Offer docs={docsDescription} />
      <Requirement />
      <About />
      <Comment />
    </Fragment>
  );
};

export default HighlightJob;
