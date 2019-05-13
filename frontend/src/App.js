import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
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
      <InfoTable issueList={issueList}/>
      <Button variant="primary" onClick={() => setShow(true)}>
        New issue
      </Button>
      <NewIssueModal show={show} setShow={setShow}/>
    </div>
  );
}

export default App;
