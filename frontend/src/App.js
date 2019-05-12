import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import IssueForm from './IssueForm';
import './App.css';

function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log('useEffect');
  })

  return (
    <div className="App">
      <Button variant="primary" onClick={() => setShow(true)}>
        New issue
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new issue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <IssueForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close without saving
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
