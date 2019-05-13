import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from "axios";

import InfoTable from "./InfoTable";
import NewIssueModal from "./NewIssueModal";
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
      <Container>
        <Row>
          <div className="AppHeader">
            <h1>Operations Fix-List</h1>
          </div>
        </Row>
        <Row>
          <div className="AppBody">
            <Button variant="primary" onClick={() => setShow(true)}>
              New issue
            </Button>
            <InfoTable issueList={issueList}/>
          </div>
        </Row>
      </Container>
      <NewIssueModal setIssueList={setIssueList} show={show} setShow={setShow}/>
    </div>
  );
}

export default App;
