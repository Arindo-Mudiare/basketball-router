import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./Articles";
import Loading from "./Loading";
import Navbar from "./Navbar";

const Home = React.lazy(() => import("./Home"));
const Players = React.lazy(() => import("./Players"));
const TeamPage = React.lazy(() => import("./TeamPage"));
const Teams = React.lazy(() => import("./Teams"));

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <React.Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/players">
              <Players />
            </Route>
            <Route path="/teams">
              <Teams />
            </Route>
            <Route path="/:teamId" exact>
              <TeamPage />
            </Route>
            <Route path="/:teamId/articles">
              <Articles />
            </Route>
            <Route path="*">
              <h1 className="text-center">404 Not Found</h1>
            </Route>
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
}
