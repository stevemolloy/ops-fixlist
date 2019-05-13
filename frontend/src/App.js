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
  }, [])

  return (
    <div className="App">
      <InfoTable issueList={issueList}/>
      <Button variant="primary" onClick={() => setShow(true)}>
        New issue
      </Button>
      <NewIssueModal show={show} setShow={setShow}/>
    </div>
  );
}

const NewIssueModal = props => {
  return (
    <Modal show={props.show} onHide={() => props.setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new issue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <IssueForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.setShow(false)}>
          Close without saving
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

const InfoTable = props => {
  return (
    <Table striped border="true" hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Submitter</th>
          <th>Description</th>
          <th>Other information</th>
        </tr>
      </thead>
      <tbody>
        {props.issueList.map((issue, index) => {
          return (
            <tr key={issue.id}>
              <td>{index+1}</td>
              <td>{issue.submitter}</td>
              <td>{issue.description}</td>
              <td>{issue.other_info}</td>
            </tr>
          )})
        }
      </tbody>
    </Table>
  )
}

export default App;
