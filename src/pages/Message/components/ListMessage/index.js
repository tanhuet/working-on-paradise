import { useEffect, useState } from "react";
import MessageItem from "../MessageItem";
import classes from "./ListMessage.module.scss";
function ListMessage(props) {
  const [listMessage, setListMessage] = useState([]);

  useEffect(() => {
    setListMessage(props.listMesssage);
  }, [props.listMesssage]);

  const compareTime = (a, b) => {
    const date1 = new Date(b.updatedAt);
    const date2 = new Date(a.updatedAt);
    if (date1.getMonth() === date2.getMonth()) {
      if (date1.getDate() === date2.getDate()) {
        return date1.getHours() - date2.getHours();
      }
      return date1.getDate() - date2.getDate();
    } else {
      return date1.getMonth() - date2.getMonth();
    }
  };

  return (
    <div className={classes.wrapper}>
      {listMessage
        ? listMessage.sort(compareTime).map((mess, index) => (
            <div key={index} onClick={() => props.selectConversation(mess)}>
              <MessageItem conversation={mess} />
            </div>
          ))
        : "No message"}
    </div>
  );
}

export default ListMessage;
