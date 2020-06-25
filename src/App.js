import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import { PageWrapper } from "./App.styles";

// Pages
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <PageWrapper>
          <Route exact Path="/">
            <Home />
          </Route>
        </PageWrapper>
      </Switch>
    </Router>
  );
}

export default App;
