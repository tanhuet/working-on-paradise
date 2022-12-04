import classes from "./MessageItem.module.scss";
import { useState, useEffect } from "react";

function MessageItem(props) {
  const [conversation, setConversation] = useState(null);

  useEffect(() => {
    setConversation(props.conversation);
  }, [props.conversation]);

  const onErrorImage = (image) => {
    image.onError = "";
    image.target.src = "https://jobsgo-storage.s3.ap-southeast-1.amazonaws.com/images/638cbf1120549255be3248de";
    return true;
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.avatar}>
        <img src={conversation?.other.avatar} alt="avatar" onError={onErrorImage} />
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
