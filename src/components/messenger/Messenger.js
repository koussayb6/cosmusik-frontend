import "./messenger.css";
import Message from "../../components/message/Message";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

export default function Messenger({ currentChat }) {
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  //el authorisation ya ahmed mta koussay
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const API = axios.create({ baseURL: "http://localhost:5000" });
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${user.token}`;
    return req;
  });

  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8901");
    socket.current.emit("setup", user);
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        chatId: currentChat._id,
        content: newMessage,
      });
    });
    socket.current.on("test", (data) => {
      console.log(data);
    });
  });

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      // setOnlineUsers(
      // user.followings.filter((f) => users.some((u) => u.userId === f))
      // );
    });
  }, [user]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.users.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  //getting all messages of a chat
  const getMessages = async () => {
    const { data } = await API.get("/api/message/" + currentChat?._id);
    setMessages(data);
  };
  useEffect(() => {
    if (currentChat != null) getMessages();
  }, [currentChat]);

  useEffect(() => {
    socket.current.on("message recieved", (newMessageRecieved) => {
      setMessages([...messages, newMessageRecieved]);
    });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      content: newMessage,
      chatId: currentChat._id,
    };

    try {
      const { data } = await API.post("/api/message/", message);

      socket.current.emit("join chat", currentChat._id);
      //const receiverId = currentChat.users.find((u) => u._id !== user._id);
      socket.current.emit("new message", data);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
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
                  <form className="chat-form" onSubmit={handleSubmit}>
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
                    <button type="submit" className="bg-current">
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
