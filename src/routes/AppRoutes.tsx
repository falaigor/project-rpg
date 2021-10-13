import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppRoute } from "./routes";

import Home from "Views/Home";
import AuthorView from "Views/AuthorView/";
import LivesView from "Views/LivesView/";
import PodcastView from "Views/PodcastView/";
import PublicationView from "Views/PublicationView/";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={`/:id`} exact component={AuthorView} />
        <Route path={AppRoute.Podcasts} component={PodcastView} />
        <Route path={AppRoute.Lives} component={LivesView} />

        <Route
          path={`${AppRoute.Publication}/:id`}
          component={PublicationView}
        />
      </Switch>
    </BrowserRouter>
  );
}
