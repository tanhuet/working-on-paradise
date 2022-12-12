import classes from "./ChatArea.module.scss";
import socketIOClient from "socket.io-client";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import config from "../../../../config";
import axios from "axios";
import { AiOutlineSend } from "react-icons/ai";
import HeaderChatArea from "../HeaderChatArea";

function ChatArea(props) {
  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState("");
  const [conversationId, setConversationId] = useState();
  const [receiver, setReceiver] = useState();

  const socketRef = useRef();
  const messagesEnd = useRef();

  const userStore = useSelector((state) => state.auth.login?.currentUser);
  useEffect(() => {
    if (props.conversation) {
      setConversationId(props.conversation.id);
      setReceiver(props.conversation.other);
    }

    if (conversationId) {
      socketRef.current = socketIOClient.connect(`${config.socket.url}`);
      axios
        .create()
        .post(`${config.api.url}/chat/conversation`, { friendId: receiver.id }, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
        .then((res) => {
          setConversationId(res.data.id);
          socketRef.current.emit("joinRoom", conversationId);
        });

      axios
        .create()
        .get(`${config.api.url}/chat/conversation/${conversationId}`, { headers: { Authorization: `Bearer ${userStore.accessToken}` } })
        .then((res) => {
          console.log(res.data);
          setMess(res.data.reverse());
        });

      socketRef.current.on("receiveMessage", (dataGot) => {
        setMess((oldMsgs) => [...oldMsgs, dataGot]);
        scrollToBottom();
      });
      return () => {
        socketRef.current.disconnect();
      };
    }
  }, [conversationId, props.conversation, receiver, userStore.accessToken]);

  const sendMessage = () => {
    if (message !== null) {
      const msg = {
        content: message,
        sender: userStore.id,
        status: "sending",
      };
      socketRef.current.emit("sendMessage", conversationId, msg);
      setMessage("");
    }
  };

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  const renderMess = mess.map((m, index) => (
    <div key={index} className={m.sender === userStore.id ? classes.yourmessage : classes.otherpeople}>
      {m.content}
    </div>
  ));

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const onEnterPress = (e) => {
    // eslint-disable-next-line
    if (e.keyCode == 13 && e.shiftKey == false) {
      sendMessage();
    }
  };

  return (
    <div className={classes.wrapper}>
      {receiver && <HeaderChatArea avatar={receiver.avatar} name={receiver.name} />}

      <div className={classes.boxchat}>
        {renderMess}
        <div style={{ float: "left", clear: "both" }} ref={messagesEnd}></div>
      </div>

      <div className={classes.sendbox}>
        <div className={classes.sendmessagebox}>
          <input className={classes.textarea} value={message} onKeyDown={onEnterPress} onChange={handleChange} placeholder="Aa" />
        </div>
        <button className={classes.buttonsend} onClick={sendMessage}>
          <AiOutlineSend />
        </button>
      </div>
    </div>
  );
}

export default ChatArea;
