import axios from "axios";
import React, { useEffect, useState } from "react";
import { Badge, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function GroupChatModel({ setConversations, conversations }) {
  const [groupChatName, setGroupChatName] = useState();
  const [showUsers, setShowUsers] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  toast.configure();

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
  };

  useEffect(() => {
    getUsers();
    return () => {};
  }, []);

  const handelSubmit = async () => {
    if (!groupChatName || !selectedUsers) {
      toast.warn("Check again");
      return;
    }

    const { data } = await API.post(`/api/chat/group`, {
      name: groupChatName,
      users: JSON.stringify(selectedUsers.map((u) => u._id)),
    });
    toast.success("Group Has Been Created");
    setConversations([data, ...conversations]);
  };

  const deletUsers = () => {
    setSelectedUsers([]);
  };
  const handleGroup = (userToAdd) => {
    if (selectedUsers.includes(userToAdd)) {
      toast.warn("All ready added");
      return;
    } else {
      setSelectedUsers([...selectedUsers, userToAdd]);
    }
  };

  const handleDelete = (delUser) => {
    setSelectedUsers(selectedUsers.filter((sel) => sel._id !== delUser._id));
  };
  return (
    <>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 className="modal-title" d="exampleModalLabel">
                Create Group Chat
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <input
                  placeholder="Chat Name "
                  className="form-control col-12"
                  onChange={(e) => setGroupChatName(e.target.value)}
                />
                <input
                  placeholder="Add Users.. "
                  className="form-control col-12"
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                    if (event.target.value == "") {
                      setShowUsers(false);
                    } else setShowUsers(true);
                  }}
                />
              </form>
              <div className="d-flex flex-row">
                <div className="mt-xl-4">
                  {selectedUsers.map((u) => {
                    return (
                      <Badge className="m-1" key={u._id}>
                        {" "}
                        {u.name}{" "}
                        <CloseButton
                          onClick={() => {
                            handleDelete(u);
                          }}
                        />
                      </Badge>
                    );
                  })}
                </div>
              </div>
              {showUsers ? (
                <div>
                  {users
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
                            key={u._id}
                            onClick={() => {
                              handleGroup(u);
                            }}
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
                    })}{" "}
                </div>
              ) : (
                <>
                  <h1></h1>
                </>
              )}
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => {
                  setSelectedUsers([]);
                }}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  handelSubmit();
                }}
              >
                Add Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupChatModel;
