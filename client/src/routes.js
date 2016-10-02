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
  PromoAdd,
  OrderProductAdd,
  DishAdd,
  Product,
  Dish,
  Promo,
  ProductAdd,
} from './containers';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route name="App" path="/" component={App}>
      <Route name="Productos" path="producto">
        <IndexRoute component={Product} />
        <Route name="Add" path="add" component={ProductAdd} />
      </Route>
      <Route name="Platos" path="plato" component={Dish} />
      <Route name="Promo" path="promo" component={Promo} />
      <Route name="Pedido" path="pedido">
        <IndexRoute component={Order} />
        <Route path=":idPedido">
          <IndexRoute component={OrderAdd} />
          <Route name="Comanda" path="comanda">
            <IndexRoute component={SelectAdd} />
            <Route name="Promos" path="promos">
              <IndexRoute component={PromoList} />
              <Route name="Add" path=":idPromo" component={PromoAdd} />
            </Route>
            <Route name="Productos" path="productos">
              <IndexRoute component={ProductList} />
              <Route name="Add" path=":idProduct" component={OrderProductAdd} />
            </Route>
            <Route name="Platos" path="platos">
              <IndexRoute component={DishList} />
              <Route name="Add" path=":idDish" component={DishAdd} />
            </Route>
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
