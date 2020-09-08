import React from 'react';
import { LIST_PAGE } from './routes';
import PokemonList from './pages/pokemon-list';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={LIST_PAGE}>
            <PokemonList />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App; 
