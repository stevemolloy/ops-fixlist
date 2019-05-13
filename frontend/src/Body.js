import React from 'react';
import InfoTable from "./InfoTable";
import Button from 'react-bootstrap/Button';

const Body = props => {
  return (
    <div className="AppBody">
      <Button variant="primary" onClick={() => props.setShow(true)}>
        New issue
      </Button>
      <InfoTable issueList={props.issueList}/>
    </div>
  )
}

export default Body;
