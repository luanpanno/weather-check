import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
