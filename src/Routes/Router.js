import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../screens/ItemDetailContainer';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer />
        </Route>
        <Route path={"/detail/:name"} render={ (props) => <ItemDetailContainer {...props}/>}/>
      </Switch>
    </BrowserRouter>
  )
}
