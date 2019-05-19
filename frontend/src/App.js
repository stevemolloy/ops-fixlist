import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

import InfoTable from "./InfoTable";
import NewIssueModal from "./NewIssueModal";
import IssuePage from './IssuePage';
import EditIssue from './EditIssue';
import './App.css';

const FrontPage = () => {
  const [show, setShow] = useState(false);
  const [issueList, setIssueList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9000/issues")
      .then(resp => {
        console.log(resp);
        setIssueList(resp.data);
      })
  }, []);

  return (
    <div className="AppBody">
      <Button variant="primary" onClick={() => setShow(true)}>
        New issue
      </Button>
      <h2>Outstanding Issues</h2>
      <InfoTable issueList={issueList.filter(issue => !issue.resolved)}/>
      <h2>Resolved Issues</h2>
      <InfoTable issueList={issueList.filter(issue => issue.resolved)}/>
      <NewIssueModal setIssueList={setIssueList} show={show} setShow={setShow}/>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <Row>
            <div className="AppHeader">
              <h1><Link to="/">Operations Fix-List</Link></h1>
            </div>
          </Row>
          <Row>
            <Switch>
              <Route exact path="/" component={FrontPage} />
              <Route exact path="/view/:issueid" component={IssuePage} />
              <Route exact path="/edit/:issueid" component={EditIssue} />
            </Switch>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
