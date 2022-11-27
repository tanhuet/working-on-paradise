import { useEffect, useState } from "react";
import MessageItem from "../MessageItem";
import classes from "./ListMessage.module.scss";
function ListMessage(props) {
  const [listMessage, setListMessage] = useState([]);

  useEffect(() => {
    setListMessage(props.listMesssage);
  }, [props.listMesssage]);

  return (
    <div className={classes.wrapper}>
      {listMessage
        ? listMessage.map((mess, index) => (
            <div key={index} onClick={() => props.selectConversation(mess)}>
              <MessageItem conversation={mess} />
            </div>
          ))
        : "No message"}
    </div>
  );
}

export default ListMessage;
