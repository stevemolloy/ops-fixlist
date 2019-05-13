import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from "axios";

import Header from "./Header";
import Body from "./Body";
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
          <Header/>
        </Row>
        <Row>
          <Body issueList={issueList} show={show} setShow={setShow} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
