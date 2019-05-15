import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import axios from "axios";

import InfoTable from "./InfoTable";
import NewIssueModal from "./NewIssueModal";
import IssuePage from './IssuePage';
import NotFound from './NotFound';
import './App.css';

const App = () => {
  const [show, setShow] = useState(false);
  const [issueList, setIssueList] = useState([]);

  const FrontPage = () => {
    return (
      <div className="AppBody">
        <Button variant="primary" onClick={() => setShow(true)}>
          New issue
        </Button>
        <InfoTable issueList={issueList}/>
      </div>
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/issues")
      .then(resp => {
        setIssueList(resp.data);
      })
  }, [])

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
              <Route exact path="/edit/:issueid" component={IssuePage} />
            </Switch>
          </Row>
        </Container>
        <NewIssueModal setIssueList={setIssueList} show={show} setShow={setShow}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
