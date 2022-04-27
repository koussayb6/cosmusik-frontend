import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";

function JoinGroupMdal({ groupID }) {
  const [show, setShow] = useState(true);
  const [description, setDescription] = useState("");
  const Navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //el authorisation ya ahmed mta koussay
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  const API = axios.create({ baseURL: "http://localhost:5000" });
  API.interceptors.request.use((req) => {
    req.headers.Authorization = `Bearer ${user.token}`;
    return req;
  });

  const ajoutReq = async (groupID) => {
    const request = {
      requesterId: user._id,
      description: description,
    };
    try {
      const { data } = await API.post("/api/group/sendReq/" + groupID, request);
      toast.success("Request Send");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const video = () => {};
  return (
    <>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make Request To the Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                Tell us why do you want to join our group{" "}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              ajoutReq(groupID);
            }}
          >
            Send Request
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default JoinGroupMdal;
