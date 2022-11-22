import classes from "./About.module.scss";
import { Link } from "react-router-dom";
import React from "react";
const About = (props) => {
  return (
    <div>
      <div className={classes.des}>
        <div className={classes.card}>
          <div className={classes.button}>
            <Link className={classes.btn}>About Company</Link>
          </div>
          <Link>
            <div className={classes.company}>
              <div className={classes["info"]}>
                {props.about?.map((item, index) => (
                  <p key={index}>● {item}</p>
                ))}
                {/* <p>
                  ● Interpret user stories, formal acceptance criteria, and
                  technical specifications into demonstrable user workflows or
                  low fidelity prototypes
                </p>
                <p>
                  ● Contribute to the validation of acceptance testing through
                  in-person testing sessions or interviews
                </p>
                <p>
                  ● Work closely with product owners to collect requirements and
                  verify design feasibility
                </p>
                <p>
                  ● Gather findings through various research methods and
                  translate them into tangible designs for developers to
                  implement
                </p>
                <p>
                  ● Maintain and frequently update complex layered files for
                  rapid prototyping
                </p>
                <p>
                  ● Assist in documenting, designing, and sustaining a custom UI
                  pattern library and web style guide for shared internal use
                </p>
                <p>
                  ● Follow and contribute to design guidelines, best practices,
                  and established UI patterns to create wireframes,
                  high-fidelity mockups, and clickable prototypes that convey
                  business requirements
                </p>
                <p>
                  ● Work closely with product and engineering teams to iterate
                  and deliver flawlessly
                </p>
                <p>
                  ● Work closely with project team to design the look-and-feel
                  of interfaces in AGILE environment
                </p>
                <p>● Lead stakeholders through the design process</p> */}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default About;
