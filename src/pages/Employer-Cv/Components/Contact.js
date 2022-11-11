import classes from "./Contact.module.scss";

const Contact = (props) => {
  return (
    <div className={classes.card}>
      <h1>Contact For Help</h1>
      <div className={classes.info}>
        <p>● Hotline: {props.contact.hotline}</p>
        <p>● Address: {props.contact.company}</p>
        <p>● Email: {props.contact.email}</p>
      </div>
    </div>
  );
};

export default Contact;
