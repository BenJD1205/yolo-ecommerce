import React from 'react'
import {
  Switch,
  Route
} from "react-router-dom";
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Product from '../pages/Product';
import Cart from '../pages/Cart';

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/catalog/:slug" component={Product} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/cart" component={Cart} />
    </Switch>
  )
}

export default routes