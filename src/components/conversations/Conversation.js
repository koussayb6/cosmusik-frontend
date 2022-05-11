import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./conversation.css";

export default function Conversation({ conversation, currentUser }) {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const friendIdName = conversation.users.find(
    (m) => m._id !== currentUser._id
  );

  const getSender = () => {
    return conversation.users[0]._id === user._id
      ? conversation.users[1].name
      : conversation.users[0].name;
  };

  useEffect(() => {
    return () => {};
  }, [conversation]);

  return (
    <li className="conversation">
      <img
        className="conversationImg"
        src="https://www.planugo.com/assets/public/site/images/tba.png"
        alt=""
      />

      <div className="row">
        <span className="conversationName col-12">
          {!conversation.isGroupChat ? getSender() : conversation.chatName}
        </span>
        <span style={{ fontSize: "0.7rem" }}>
          {conversation.latestMessage
            ? conversation.latestMessage.content
            : "Send New message"}
        </span>
      </div>
    </li>
  );
}
