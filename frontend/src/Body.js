import React from 'react';
import NewIssueModal from "./NewIssueModal";
import InfoTable from "./InfoTable";
import Button from 'react-bootstrap/Button';

const Body = props => {
  return (
    <div className="AppBody">
      <Button variant="primary" onClick={() => props.setShow(true)}>
        New issue
      </Button>
      <InfoTable issueList={props.issueList}/>
      <NewIssueModal issueList={props.issueList} setIssueList={props.setIssueList} show={props.show} setShow={props.setShow}/>
    </div>
  )
}

export default Body;
