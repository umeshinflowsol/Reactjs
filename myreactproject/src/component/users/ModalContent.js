import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import AddUser from "./AddUser";
function ModalContent() {
  const [showData, setData] = useState(true);

  const handleShow = () => setData(true);
  const handleClose = () => setData(true);
  return (
    <div>
      <Modal show={showData} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Paper</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <AddUser />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal>
      <div>
        <Button onClick={handleShow}>Addser</Button>
      </div>
    </div>
  );
}

export default ModalContent;
