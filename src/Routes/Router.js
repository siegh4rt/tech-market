import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../screens/ItemDetailContainer';

export default function Router(props) {
  const {targetProductSelected} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer
            targetProductSelected = {targetProductSelected}
          />
        </Route>
        <Route path='/:id'>
          <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
