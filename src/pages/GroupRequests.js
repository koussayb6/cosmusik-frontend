import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { format } from "timeago.js";
import { toast } from "react-toastify";

function GroupRequests() {
  //el authorisation ya ahmed mta koussay
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const API = axios.create({ baseURL: "http://localhost:5000" });
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${user.token}`;
    return req;
  });
  const [group, setGroup] = useState({});
  const [requestss, setRequestss] = useState([]);
  const { id } = useParams();

  //geting group
  const fetchGroup = async () => {
    const { data } = await API.get("/api/group/oneGroup/" + id);
    setGroup(data);
    setRequestss(data.requests);
  };

  const confirmeReq = async (requestId, groupId) => {
    try {
      const { data } = await API.patch(
        "/api/group/confirmRequest/" + requestId + "/" + groupId
      );
      toast.success("Confirmer !");
    } catch (error) {
      console.log(error);
      toast.danger("Check again !");
    }
  };

  const refuseReq = async (requestId, groupId) => {
    try {
      const { data } = await API.patch(
        "/api/group/refuseRequest/" + requestId + "/" + groupId
      );
      toast.error("Refuser !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      console.log(error);
      toast.danger("Check again !");
    }
  };

  useEffect(() => {
    fetchGroup();
  }, [requestss]);
  if (!group.requests) return <h1>loading..</h1>;
  return (
    <>
      {" "}
      <Header></Header>
      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left pe-0">
            <div className="row">
              <div className="col-xl-12">
                <div className="row ps-2 pe-1"></div>
                {group.requests.map((value, index) => (
                  <div className="col-md-6 col-sm-6 pe-2 ps-2">
                    <div className="card d-block border-0 shadow-xss rounded-3 overflow-hidden mb-0 mt-2">
                      <div className="card-body position-relative h100 bg-image-cover bg-image-center">
                        <h4 className="fw-700 font-xsss mt-3 mb-1">
                          Description : {value.description}
                        </h4>
                      </div>
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
                        <h4 className="fw-700 font-xsss mt-3 mb-1">
                          {" "}
                          {value.requesterId?.name}
                        </h4>
                        <p className="fw-500 font-xsssss text-grey-500 mt-0 mb-3 lh-3">
                          {format(value.requesterId?.timestamp)}
                        </p>
                        <span className="position-absolute right-15 top-0 d-flex align-items-center pe-auto">
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              confirmeReq(value.requesterId?._id, group._id);
                            }}
                            className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                          >
                            Confirme
                          </a>
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              refuseReq(value.requesterId._id, group._id);
                            }}
                            className="text-center p-2 lh-24 w100 ms-1 ls-3 d-inline-block rounded-xl bg-current font-xsssss fw-700 ls-lg text-white"
                          >
                            Refuse
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GroupRequests;
