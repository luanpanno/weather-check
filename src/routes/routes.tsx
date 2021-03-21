import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from '../container/Layout';
import Home from '../pages/Home';

const Routes = () => {
  return (
    <Switch>
      <Layout>
        <Route exact path="/" component={Home} />

        <Redirect to="/" />
      </Layout>
    </Switch>
  );
};

export default Routes;
