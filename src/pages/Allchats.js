import React, { useRef } from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Messenger from "../components/messenger/Messenger";
import Conversation from "../components/conversations/Conversation";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import "./AllChat.css";
import GroupChatModel from "../components/conversations/groupChat/GroupChatModel";

function Allchats() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showChats, setShowChats] = useState(true);

  const socket = useRef(io("ws://localhost:8900"));

  useEffect(() => {
    socket.current.emit("addUser", "622840e4585911cedea3f49c");

    return () => {};
  }, []);

  //el authorisation ya ahmed mta koussay
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const API = axios.create({ baseURL: "http://localhost:5000" });
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${user.token}`;
    return req;
  });

  //geting all the chats of the user
  const getUsers = async () => {
    const { data } = await API.get("/api/users/");
    setUsers(data);
    console.log(data);
  };

  //geting all the chats of the user

  const fetchConv = async () => {
    const { data } = await API.get("/api/chat/");
    setConversations(...conversations, data);
    console.log(data);
  };

  useEffect(() => {
    fetchConv();
    getUsers();
  }, []);

  const creatChat = async (userId) => {
    const newChat = {
      userId: userId,
    };
    const { data } = await API.post("/api/chat/", newChat);

    setConversations([...conversations, data]);
    console.log(data);
    setCurrentChat(data);
  };

  return (
    <>
      {currentChat ? (
        <Messenger currentChat={currentChat}> </Messenger>
      ) : (
        <div className="main-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left">
              <span className="noConversationText p-5  ">
                Open a conversation to start a chat
              </span>
            </div>
          </div>
        </div>
      )}
      <div className="nav-header bg-white shadow-xs border-0">
        <nav className="navigation scroll-bar nav-active">
          <div className="container ps-0 pe-0">
            <div className="nav-content">
              <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                <div className="nav-caption fw-600 font-xssss text-grey-500 row px-4    ">
                  <span>ALL CHATS </span>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Launch demo modal
                  </button>

                  <input
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                      if (event.target.value == "") {
                        setShowChats(true);
                      } else setShowChats(false);
                    }}
                    type="text"
                    className="form-control col-12 "
                    placeholder="Search For User"
                  />
                </div>
                {showChats ? (
                  <ul className="mb-1 top-content">
                    {conversations.map((c) => {
                      return (
                        <div
                          key={c._id}
                          onClick={() => {
                            setCurrentChat(c);
                          }}
                        >
                          <Conversation conversation={c} currentUser={user} />
                        </div>
                      );
                    })}
                  </ul>
                ) : (
                  users
                    .filter((v) => {
                      if (searchTerm == "") {
                        return v;
                      } else if (
                        v.name.toLowerCase().includes(searchTerm.toLowerCase())
                      ) {
                        return v;
                      }
                    })
                    .map((u) => {
                      return (
                        <>
                          <li
                            className="conversation"
                            onClick={() => creatChat(u._id)}
                          >
                            <img
                              className="conversationImg"
                              src="https://www.planugo.com/assets/public/site/images/tba.png"
                              alt=""
                            />

                            <div className="row">
                              <span className="conversationName col-12">
                                {" "}
                                {u.name}
                              </span>
                            </div>
                          </li>
                        </>
                      );
                    })
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      <GroupChatModel />
    </>
  );
}

export default Allchats;
