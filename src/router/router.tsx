import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";
import Users from "../pages/users";
import Login from "../pages/login";

export default function Router() {
  const [cookies] = useCookies(["access_token"]);

  if (cookies.access_token) {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Users} />
          <Redirect exact to="/" />
        </Switch>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Redirect exact to="/" />
      </Switch>
    </BrowserRouter>
  );
}
