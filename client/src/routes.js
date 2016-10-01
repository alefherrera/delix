import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {
  App,
  Order,
  OrderAdd,
  SelectAdd,
  PromoList,
  ProductList,
  DishList,
} from './containers';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route name="App" path="/" component={App}>
      <Route name="Pedido" path="pedido">
        <IndexRoute component={Order} />
        <Route path=":idPedido">
          <IndexRoute component={OrderAdd} />
          <Route name="Comanda" path="comanda">
            <IndexRoute component={SelectAdd} />
            <Route name="Promos" path="promos" component={PromoList} />
            <Route name="Productos" path="productos" component={ProductList} />
            <Route name="Platos" path="platos" component={DishList} />
          </Route>
        </Route>
      </Route>
    </Route>
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object,
};

export default Routes;
