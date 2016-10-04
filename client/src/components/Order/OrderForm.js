import React, { PropTypes } from 'react';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
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
              {order.comandas && order.comandas.map((comanda) => (
                comanda.platosPorComandas && comanda.platosPorComandas.map((plato, k) => (
                  <CardText key={k}>
                    {plato.plato.nombre}
                  </CardText>
                ))
                ))
              }
              {order.comandas && order.comandas.map((comanda) => (
                comanda.promosPorComandas && comanda.promosPorComandas.map((promo, k) => (
                  <CardText key={k}>
                    {promo.promo.nombre}
                  </CardText>
                ))
                ))
              }
              {order.comandas && order.comandas.map((comanda) => (
                comanda.productosPorComandas && comanda.productosPorComandas.map((producto, k) => (
                  <CardText key={k}>
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
