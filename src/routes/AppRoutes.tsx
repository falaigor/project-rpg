import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppRoute } from "./routes";

import Home from "Views/Home";
import Lives from "Views/Lives";
import Podcast from "Views/Podcast";
import Publication from "Views/Publication";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={AppRoute.Podcasts} component={Podcast} />
        <Route path={AppRoute.Lives} component={Lives} />

        <Route path={`${AppRoute.Publication}/:id`} component={Publication} />
      </Switch>
    </BrowserRouter>
  );
}
