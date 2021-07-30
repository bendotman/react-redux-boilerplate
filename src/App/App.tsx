/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { history } from "../_helpers";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import LoginPage from 'Pages/LoginPage/LoginPage';
import AdminPage from 'Pages/AdminPage/AdminPage';
import { DashboardPage } from 'Pages';


export function App() {
  return (
    <Router history={history}>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/admin" component={AdminPage} />
          <Redirect from="*" to="/" />
        </Switch>
    </Router>
  );
}
