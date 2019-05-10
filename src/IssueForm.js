import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const IssueForm = props => {
  const [submitter, setSubmitter] = useState("")
  const [issue, setIssue] = useState("")
  const [otherinfo, setOtherinfo] = useState("")

  const handleSubmit = event => {
    alert(submitter + issue + otherinfo)
    event.preventDefault()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Submitter</Form.Label>
        <Form.Control type="text" placeholder="Your name" onChange={e => setSubmitter(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Issue</Form.Label>
        <Form.Control type="textarea" placeholder="Issue" onChange={e => setIssue(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Other information</Form.Label>
        <Form.Control type="textarea" placeholder="Other information" onChange={e => setOtherinfo(e.target.value)}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default IssueForm;
