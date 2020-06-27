import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { PageWrapper } from "./App.styles";

// Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About.js";
import Projects from "./Pages/Projects/Projects.js";

function App() {
  return (
    <Router>
      <Switch>
        <PageWrapper>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </PageWrapper>
      </Switch>
    </Router>
  );
}

export default App;
