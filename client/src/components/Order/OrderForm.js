import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Receipt from 'material-ui/svg-icons/action/receipt';

const OrderForm = ({ orders, onCreateClick }) => (
  <Card>
    <CardTitle>
      Pedido
      </CardTitle>
      <CardText>
        <div>
          {
          orders && orders.map((order, i) => (
            <Card key={i}>
              <CardHeader
                title={`Order ${order.id}`}
                avatar={<Receipt />}
              />
              {order.comandas && order.comandas.map((comanda, i) => (
                comanda.platosPorComandas && comanda.platosPorComandas.map((plato, i) => (
                  <CardText>
                    {plato.plato.nombre}
                  </CardText>
                ))
                ))
              }
              {order.comandas && order.comandas.map((comanda, i) => (
                comanda.promosPorComandas && comanda.promosPorComandas.map((promo, i) => (
                  <CardText>
                    {promo.promo.nombre}
                  </CardText>
                ))
                ))
              }
              {order.comandas && order.comandas.map((comanda, i) => (
                comanda.productosPorComandas && comanda.productosPorComandas.map((producto, i) => (
                  <CardText>
                    {producto.producto.descripcion}
                  </CardText>
                ))
                ))
              }

            </Card>
          ))
        }
      </div>
    </CardText>
    <Fab onClick={onCreateClick}>
      <ContentAdd />
    </Fab>
  </Card>
);

OrderForm.propTypes = {
  onCreateClick: PropTypes.func,
  orders: PropTypes.array,
};

export default OrderForm;
