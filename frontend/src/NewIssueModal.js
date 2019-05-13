import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import IssueForm from './IssueForm';

const NewIssueModal = props => {
  return (
    <Modal show={props.show} onHide={() => props.setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add a new issue</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <IssueForm setShow={props.setShow}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => props.setShow(false)}>
          Close without saving
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default NewIssueModal;
