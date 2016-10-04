import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {
  App,
  Order,
  OrderAdd,
  PromoList,
  ProductList,
  DishList,
  PromoAdd,
  OrderProductAdd,
  OrderDishAdd,
  Product,
  Dish,
  Promo,
  ProductAdd,
  DishAdd,
} from './containers';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route name="App" path="/" component={App}>
      <Route name="Productos" path="producto">
        <IndexRoute component={Product} />
        <Route name="Add" path="add" component={ProductAdd} />
      </Route>
      <Route name="Platos" path="plato" >
        <IndexRoute component={Dish} />
        <Route name="Add" path="add" component={DishAdd} />
      </Route>
      <Route name="Promo" path="promo" component={Promo} />
      <Route name="Pedido" path="pedido">
        <IndexRoute component={Order} />
        <Route path=":idPedido">
          <IndexRoute component={OrderAdd} />
          <Route name="Comanda" path="comanda">
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
              <Route name="Add" path=":idDish" component={OrderDishAdd} />
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
