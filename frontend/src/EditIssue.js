import React, { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import NotFound from './NotFound';

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

  if (notfound) {
    return <NotFound/>;
  }

  const submitter_handler = (event) => {
    setIssue({...issue, submitter: event.target.value});
  }

  const description_handler = (event) => {
    setIssue({...issue, description: event.target.value});
  }

  const other_info_handler = (event) => {
    setIssue({...issue, other_info: event.target.value});
  }

  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Submitter</Form.Label>
        <Form.Control
          as="textarea"
          rows="1"
          cols="40"
          value={issue.submitter}
          onChange={submitter_handler}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Issue</Form.Label>
        <Form.Control
          as="textarea"
          rows="7"
          value={issue.description}
          onChange={description_handler}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Other information</Form.Label>
        <Form.Control
          as="textarea"
          value={issue.other_info}
          onChange={other_info_handler}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default EditIssue;
