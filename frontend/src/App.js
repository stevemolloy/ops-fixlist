import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import axios from "axios";

import IssueForm from './IssueForm';
import './App.css';

function App() {
  const [show, setShow] = useState(false);
  const [issueList, setIssueList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/issues")
      .then(resp => {
        console.log(resp.data);
        setIssueList(resp.data);
      })
    console.log('useEffect');
  }, [])

  return (
    <div className="App">
      <Table striped border hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Submitter</th>
            <th>Description</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {issueList.map(issue => {
            return (
              <tr>
                <td>#</td>
                <td>{issue.submitter}</td>
                <td>{issue.description}</td>
                <td>{issue.other_info}</td>
              </tr>
            )})
          }
        </tbody>
      </Table>
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
