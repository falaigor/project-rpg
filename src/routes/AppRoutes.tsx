import { AppRoute } from "./routes";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "Views/Home";
import Podcast from "Views/Podcast";
import Lives from "Views/Lives";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={AppRoute.Podcasts} component={Podcast} />
        <Route path={AppRoute.Lives} component={Lives} />
      </Switch>
    </BrowserRouter>
  );
}
