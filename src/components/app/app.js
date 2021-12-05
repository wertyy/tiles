import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Start from '../start/start';
import Game from '../game/game';
import { AppRoute } from '../../const';

import './app.css';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path={AppRoute.Game}>
            <Game />
          </Route>
          <Route>
            <Start />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
