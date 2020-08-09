import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./component/layout/Navbar";
import Drawer from "./component/layout/Drawer";
import Dashboard from "./component/dashboard/Dashboard";
import store from "./redux/store";
import Profile from "./component/users/Profile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Drawer />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/profile/:id' component={Profile} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
