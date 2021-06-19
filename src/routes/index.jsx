import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import CustomerList from "../features/CustomersList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CustomerList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
