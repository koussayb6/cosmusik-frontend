import axios from "axios";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

function CreateGroup() {
  const [title, setTitle] = useState("");
  //el authorisation ya ahmed mta koussay
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const API = axios.create({ baseURL: "http://localhost:5000" });
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${user.token}`;
    return req;
  });

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../groups`;
    navigate(path);
  };

  const createGroup = async () => {
    const group = {
      title: title,
    };
    try {
      const { data } = await API.post("/api/group/" + user._id, group);
      toast.success("Group Created");
      routeChange();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-content right-chat-active ">
        <div className="card shadow-xss w-100 d-block d-flex border-5 p-4 mb-6">
          <Form.Group className="mb-3">
            <Form.Control
              placeholder="Name of the group"
              enable
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="You Want the group Privat?"
              id="accept"
              name="accept"
              value="yes"
              enable
            />
          </Form.Group>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              createGroup();
            }}
          >
            Create group
          </button>
        </div>
      </div>
    </>
  );
}

export default CreateGroup;
