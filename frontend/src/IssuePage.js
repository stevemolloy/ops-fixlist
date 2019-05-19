import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import NotFound from './NotFound';

const IssuePage = ({match}) => {
  const [issue, setIssue] = useState({});
  const [notfound, setNotfound] = useState(false);
  const issueid = match.params.issueid;

  const toggle_resolved = () => {
    const newIssue = {...issue, resolved: !issue.resolved};
    setIssue(newIssue);
    axios
      .put("http://localhost:9000/issues/" + issueid, newIssue)
      .then((resp) => {
        console.log(resp);
      })
  }

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

  const resolvedButtonText = issue.resolved ?
    'Mark as NOT resolved' :
    'Mark as resolved';;

  return (
    <>
      <Button variant="warning" onClick={() => window.location.replace("/edit/"+issueid)}>Edit issue</Button>
      <Button variant="danger" onClick={toggle_resolved}>{resolvedButtonText}</Button>
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
          <tr>
            <td><strong>Resolved?</strong></td>
            <td>{issue.resolved ? 'Yes' : 'No'}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default IssuePage;
