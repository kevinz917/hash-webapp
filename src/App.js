import './common/styles/colors.scss';
import './common/styles/typography.scss';
import './common/styles/overall.scss';
import history from './common/components/Router/history';
import { Route, Router, Switch } from 'react-router';

import Main from './Main';

const App = () => {
  return (
    <div className="overall-page-container">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
