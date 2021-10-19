import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppRoute } from "./routes";

import Home from "Views/Home";
import AuthorView from "Views/AuthorView/";
import LivesView from "Views/LivesView/";
import PodcastView from "Views/PodcastView/";
import PublicationView from "Views/PublicationView/";

import LoginRedirect from "Views/LoginRedirect";
import DashboardView from "Views/DashboardView/";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={`${AppRoute.Author}/:id`} exact component={AuthorView} />
        <Route path={AppRoute.Podcasts} component={PodcastView} />
        <Route path={AppRoute.Lives} component={LivesView} />

        <Route
          path={`${AppRoute.Publication}/:id`}
          component={PublicationView}
        />

        <Route
          exact
          path="/connect/:providerName/redirect"
          component={LoginRedirect}
        />

        <Route exact path={AppRoute.Dashboard} component={DashboardView} />
      </Switch>
    </BrowserRouter>
  );
}
