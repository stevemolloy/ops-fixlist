import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";

import InfoTable from "./InfoTable";
import NewIssueModal from "./NewIssueModal";

const FrontPage = () => {
  const [show, setShow] = useState(false);
  const [issueList, setIssueList] = useState([]);

  useEffect(() => {
    axios
      .get("/issues")
      .then(resp => {
        setIssueList(resp.data);
      })
  }, []);

  return (
    <div className="AppBody">
      <Button variant="primary" onClick={() => setShow(true)}>
        New issue
      </Button>
      <h2>Outstanding Issues</h2>
      <InfoTable issueList={issueList.filter(issue => !issue.resolved)}/>
      <h2>Resolved Issues</h2>
      <InfoTable issueList={issueList.filter(issue => issue.resolved)}/>
      <NewIssueModal setIssueList={setIssueList} show={show} setShow={setShow}/>
    </div>
  );
};

export default FrontPage;
