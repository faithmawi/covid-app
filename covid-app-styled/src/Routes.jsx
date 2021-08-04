import { Route, Switch } from "react-router-dom";
import CountryPage from "./CountryPage";

const Routes = () => (
  <Switch>
    <Route path="/:country">
      <CountryPage />
    </Route>
  </Switch>
);

export default Routes;
