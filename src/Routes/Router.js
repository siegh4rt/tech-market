import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import HomeContainer from '../components/HomeContainer/HomeContainer'

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <ItemListContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}