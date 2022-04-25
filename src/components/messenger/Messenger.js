import "./messenger.css";
import { format } from "timeago.js";
import Message from "../../components/message/Message";
import Conversation from "../../components/conversations/Conversation";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export default function Messenger({ currentChat }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();

  //el authorisation ya ahmed mta koussay
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const API = axios.create({ baseURL: "http://localhost:5000" });
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${user.token}`;
    return req;
  });

  //getting all messages of a chat
  const getMessages = async () => {
    const { data } = await API.get("/api/message/" + currentChat?._id);
    setMessages(data);
    console.log(data);
  };
  useEffect(() => {
    if (currentChat != null) getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      content: newMessage,
      chatId: currentChat._id,
    };

    const { data } = await API.post("/api/message/", message);
    setMessages([...messages, data]);
    setNewMessage("");
    console.log(messages);
  };
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <>
      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div
            className="middle-sidebar-left pe-0"
            style={{ maxWidth: "100%" }}
          >
            <div className="row">
              <div className="col-lg-12 position-relative">
                <div className="chat-wrapper pt-0 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                  <div className="chat-body p-3 ">
                    <div className="messages-content pb-5">
                      {messages.map((message) => {
                        return (
                          <Message
                            scrollRef={scrollRef}
                            key={message._id}
                            message={message}
                            own={message.sender._id === user._id}
                          />
                        );
                      })}

                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div
                  className="chat-bottom dark-bg p-3 shadow-none theme-dark-bg"
                  style={{ width: "98%" }}
                >
                  <form className="chat-form">
                    <button className="bg-grey float-left">
                      <i className="ti-microphone text-grey-600"></i>
                    </button>
                    <div className="form-group">
                      <input
                        type="text"
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                      />
                    </div>
                    <button className="bg-current" onClick={handleSubmit}>
                      <i className="ti-arrow-right text-white"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
