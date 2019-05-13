import React from 'react';
import NewIssueModal from "./NewIssueModal";
import InfoTable from "./InfoTable";
import Button from 'react-bootstrap/Button';

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

export default Body;
