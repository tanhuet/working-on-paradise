import classes from "./MessageItem.module.scss";
import { useState, useEffect } from "react";

function MessageItem(props) {
  const [conversation, setConversation] = useState(null);

  useEffect(() => {
    setConversation(props.conversation);
  }, [props.conversation]);

  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar}>
        <img src={conversation?.other.avatar} alt="avatar" />
      </div>
      <div className={classes.info}>
        <div className={classes.name}>{conversation?.other.name}</div>
        <div className={classes.lastMessage}>
          {conversation?.lastMessage?.content.length > 20
            ? `${conversation?.lastMessage?.content.slice(0, 30)}...`
            : conversation?.lastMessage?.content}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
