import { useEffect, useState } from "react";
import ChatArea from "./components/ChatArea";
import ListMessage from "./components/ListMessage";
import classes from "./Message.module.scss";
import { useSelector } from "react-redux";
import axios from "axios";
import config from "../../config";
// import socketIOClient from "socket.io-client";

function Message(props) {
  const userStore = useSelector((state) => state.auth.login?.currentUser);
  const [listConversation, setListConversation] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState(true);

  // const socketRef = useRef();

  useEffect(() => {
    // socketRef.current = socketIOClient.connect(`${config.api.url}`);

    // socketRef.current.on("receiveMess", (dataGot) => {
    //   console.log("NEW MESSAGE");
    //   console.log(dataGot);
    //   if (dataGot === "new_message") setNewMessage(true);
    // });

    if (newMessage) {
      axios.get(`${config.api.url}/chat/list-conversations`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } }).then((res) => {
        console.log("ressss", res.data);
        setListConversation(res.data);
        setNewMessage(false);
      });
    }

    setTimeout(() => {
      setNewMessage(true);
    }, 10000);
  }, [userStore, newMessage]);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.content}>
        <ListMessage listMesssage={listConversation} selectConversation={handleSelectConversation} />
        <ChatArea conversation={selectedConversation} receiver={props.receiver} />
      </div>
    </div>
  );
}

export default Message;
