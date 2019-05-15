import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

import NotFound from './NotFound';

const IssuePage = ({match}) => {
  const [issue, setIssue] = useState({});
  const [notfound, setNotfound] = useState(false);
  const issueid = match.params.issueid;

  useEffect(() => {
    axios
      .get("http://localhost:9000/issues/" + issueid)
      .then(resp => {
        setIssue(resp.data);
      })
      .catch((err) => {
        console.log(err);
        setNotfound(true);
      });
  }, [issueid]);

  if (notfound) {
    return <NotFound id={issueid} />;
  }

  const createdDateTime = new Date(issue.createdAt);

  return (
    <Table variant="dark" borderless striped hover>
      <tbody>
        <tr>
          <td><strong>Submitter</strong></td>
          <td>{issue.submitter}</td>
        </tr>
        <tr>
          <td><strong>Date submitted</strong></td>
          <td>{createdDateTime.toString()}</td>
        </tr>
        <tr>
          <td><strong>Description</strong></td>
          <td>{issue.description}</td>
        </tr>
        <tr>
          <td><strong>Other information</strong></td>
          <td>{issue.other_info}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default IssuePage;
