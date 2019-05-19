import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import IssuePage from './IssuePage';
import EditIssue from './EditIssue';
import FrontPage from './FrontPage';
import './App.css';

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
