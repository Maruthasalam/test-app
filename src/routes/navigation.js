import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../helpers/history";
import SearchResultPage from "../app/searchResultPage";
import DetailViewPage from "../app/detailViewPage";
export default function navigation() {
  return (
    <Router history={history}>
      <div>
        <Route exact path="/" component={SearchResultPage} />
        <Route path="/detailedviewPage" component={DetailViewPage} />
      </div>
    </Router>
  );

}