import { Modal } from "bootstrap";
import { Button } from "bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

function CreateGroupModal() {
  return (
    <>
      <div
        class="modal fade"
        id="haha"
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
                />
                <input
                  placeholder="Add Users.. "
                  className="form-control col-12"
                />
              </form>
              <div className="d-flex flex-row">
                <div className="mt-xl-4"></div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Add Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateGroupModal;
