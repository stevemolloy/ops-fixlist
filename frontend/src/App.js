import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from "axios";

import NewIssueModal from "./NewIssueModal";
import InfoTable from "./InfoTable";
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
          <Body
            issueList={issueList}
            show={show}
            setShow={setShow}
          />
        </Row>
      </Container>
    </div>
  );
}

const Header = props => {
  return (
    <div className="AppHeader">
      <h1>Operations Fix-List</h1>
    </div>
  )
}

const Body = props => {
  return (
    <div className="AppBody">
      <InfoTable issueList={props.issueList}/>
      <Button variant="primary" onClick={() => props.setShow(true)}>
        New issue
      </Button>
      <NewIssueModal show={props.show} setShow={props.setShow}/>
    </div>
  )
}

export default App;
