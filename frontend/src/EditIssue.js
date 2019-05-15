import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const EditIssue = ({match}) => {
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

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Submitter</Form.Label>
        <Form.Control type="text" defaultValue={issue.submitter} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Issue</Form.Label>
        <Form.Control type="textarea" defaultValue={issue.description} />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Other information</Form.Label>
        <Form.Control type="textarea" defaultValue={issue.other_info} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default EditIssue;
