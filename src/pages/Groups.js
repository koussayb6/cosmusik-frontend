import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagetitle from "../components/Pagetitle";
import Load from "../components/Load";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import JoinGroupMdal from "../components/JoinGroupMdal";
import { useNavigate } from "react-router-dom";

function Groups() {
  const [groups, setGroups] = useState([]);
  const [show, setShow] = useState(false);
  const [groupID, setGroupID] = useState(null);

  //el authorisation ya ahmed mta koussay
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const API = axios.create({ baseURL: "http://localhost:5000" });
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${user.token}`;
    return req;
  });

  const joinGroup = async (groupId, PrOrNot) => {
    const group = {
      userCnte: user,
    };
    try {
      if (PrOrNot) {
        const { data } = await API.patch(
          "/api/group/joinGroup/" + groupId,
          group
        );
        toast.success("Joined !!");
      } else {
        toast.warn("You have to send a Request");
        setGroupID(groupId);
        setShow(true);
      }
    } catch (error) {
      console.log(error);
      toast.warn("failed");
    }
  };

  //geting groups
  const fetchGroups = async () => {
    const { data } = await axios.get("/api/group/");
    setGroups(data);
  };

  useEffect(() => {
    fetchGroups();
  });

  let navigate = useNavigate();
  const routeChange = (idGroup) => {
    navigate("../grouppage/" + idGroup);
  };
  return (
    <>
      <Header></Header>

      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <div className="col-xl-12">
                <Pagetitle title="Group" setShow={setShow} />
                {show ? <JoinGroupMdal groupID={groupID} /> : <h3></h3>}
                <div className="row ps-2 pe-1">
                  {groups.map((value, index) => (
                    <div key={index} className="col-md-6 col-sm-6 pe-2 ps-2">
                      <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-0 mt-2">
                        <div
                          className="card-body position-relative h100 bg-image-cover bg-image-center"
                          style={{
                            backgroundImage: `url(https://thumbs.dreamstime.com/z/group-children-jumping-over-colore-background-25435512.jpg)`,
                          }}
                        ></div>
                        <div className="card-body d-block w-100 pl-10 pe-4 pb-4 pt-0 text-left position-relative">
                          <figure
                            className="avatar position-absolute w75 z-index-1 left-15"
                            style={{ marginTop: `-40px` }}
                          >
                            <img
                              src={
                                "https://cdn-icons-png.flaticon.com/512/219/219986.png"
                              }
                              alt="avater"
                              className="float-right p-1 bg-white rounded-circle w-100 "
                            />
                          </figure>
                          <div className="clearfix"></div>
                          <h4
                            className="fw-700 font-xsss mt-3 mb-1"
                            onClick={() => {
                              routeChange(value._id);
                            }}
                          >
                            {value.title}
                          </h4>
                          <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3 lh-3">
                            {value.email}
                          </p>
                          <span className="position-absolute right-15 top-0 d-flex align-items-center pe-auto">
                            <a className="d-lg-block d-none">
                              {value.public ? (
                                <img
                                  src="https://image.shutterstock.com/image-vector/people-icon-vector-design-template-600w-1934625755.jpg"
                                  className=" btn-round-md font-md bg-primary-gradiant text-white"
                                ></img>
                              ) : (
                                <img
                                  src="https://image.shutterstock.com/shutterstock/photos/153874961/display_1500/stock-vector-lock-icon-153874961.jpg"
                                  className=" btn-round-md font-md bg-primary-gradiant text-white"
                                ></img>
                              )}
                            </a>

                            <a
                              onClick={() => {
                                joinGroup(value._id, value.public);
                              }}
                              className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                            >
                              Join Group
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  <Load />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Groups;
