import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import IssueForm from './IssueForm';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  }

  const handleShow = () => {
    setShow(true);
  }

  return (
    <div className="App">
      <Button variant="primary" onClick={handleShow}>
        New issue
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <IssueForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close without saving
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
