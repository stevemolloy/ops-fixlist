import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const IssuePage = ({match}) => {
  const [issue, setIssue] = useState({});
  const issueid = match.params.issueid;

  useEffect(() => {
    axios
      .get("http://localhost:9000/issues/" + issueid)
      .then(resp => {
        setIssue(resp.data);
      });
  }, []);

  return (

    <div><h1>{issue.description}</h1></div>
  );
}

export default IssuePage;
