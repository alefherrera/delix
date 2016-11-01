import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import {
  App,
  // Order,
  OrderAdd,
  PromoList,
  ProductList,
  DishList,
  OrderPromoAdd,
  OrderProductAdd,
  OrderDishAdd,
  Product,
  Dish,
  Promo,
  ProductAdd,
  ProductEdit,
  DishAdd,
  DishEdit,
  PromoAdd,
  PromoEdit,
  Sector,
  Table,
  CommandViewer,
  Setting,
  OrderDetail,
  TimeZone,
  TimeZoneAdd,
  TimeZoneEdit,
  Reservation,
  ReservationAdd,
  ReservationEdit,
  Ticket,
} from './containers';

const Routes = ({ history }) => (
  <Router history={history}>
    <Route name="App" path="/" component={App}>
      <Route name="Productos" path="producto">
        <IndexRoute component={Product} />
        <Route name="Add" path="add" component={ProductAdd} />
        <Route name="Edit" path="edit/:productId" component={ProductEdit} />
      </Route>
      <Route name="Platos" path="plato" >
        <IndexRoute component={Dish} />
        <Route name="Add" path="add" component={DishAdd} />
        <Route name="Edit" path="edit/:dishId" component={DishEdit} />
      </Route>
      <Route name="Promo" path="promo">
        <IndexRoute component={Promo} />
        <Route name="Add" path="add" component={PromoAdd} />
        <Route name="Edit" path="edit/:promoId" component={PromoEdit} />
      </Route>
      <Route name="Franja" path="franja">
        <IndexRoute component={TimeZone} />
        <Route name="Add" path="add" component={TimeZoneAdd} />
        <Route name="Edit" path="edit/:timeZoneId" component={TimeZoneEdit} />
      </Route>
      <Route name="Reserva" path="reserva">
        <IndexRoute component={Reservation} />
        <Route name="Add" path="add" component={ReservationAdd} />
        <Route name="Edit" path="edit/:reservationId" component={ReservationEdit} />
      </Route>
      <Route name="Sector" path="sector">
        <IndexRoute component={Sector} />
        <Route name="Pedido" path=":mesaId">
          <IndexRoute component={Table} />
          <Route path=":pedidoId">
            <IndexRoute component={OrderAdd} />
            <Route name="Detalle" path="detalle" component={OrderDetail} />
            <Route name="Comanda" path="comanda">
              <Route name="Promos" path="promos">
                <IndexRoute component={PromoList} />
                <Route name="Add" path=":promoId" component={OrderPromoAdd} />
              </Route>
              <Route name="Productos" path="productos">
                <IndexRoute component={ProductList} />
                <Route name="Add" path=":productId" component={OrderProductAdd} />
              </Route>
              <Route name="Platos" path="platos">
                <IndexRoute component={DishList} />
                <Route name="Add" path=":dishId" component={OrderDishAdd} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
      <Route name="Visor" path="visor" component={CommandViewer} />
      <Route name="Tickets" path="tickets" component={Ticket} />
      <Route name="Configuraciones" path="configuraciones" component={Setting} />
    </Route>
  </Router>
);

Routes.propTypes = {
  history: PropTypes.object,
};

export default Routes;
