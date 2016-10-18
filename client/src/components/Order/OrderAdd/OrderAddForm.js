import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import OrderLineList from './OrderLineList';
import styles from './style.css';

const OrderAddForm = (
  { promos, products, dishes, onSendOrderLines, onCloseOrder,
    linkPromo, linkProduct, linkDish, order }) => (
  <Card>
    <CardTitle>
      Pedido
    </CardTitle>
    <CardText>
      <List>
        <Card>
          <OrderLineList
            title="Promociones"
            link={linkPromo}
            pending={promos}
            saved={order.promos}
            getPrimary={item => item.nombre}
            getSecondary={item => item.quantity}
          />
          <Divider />
          <OrderLineList
            title="Productos"
            link={linkProduct}
            pending={products}
            saved={order.products}
            getPrimary={item => item.descripcion}
            getSecondary={item => item.quantity}
          />
          <Divider />
          <OrderLineList
            title="Platos"
            link={linkDish}
            pending={dishes}
            saved={order.dishes}
            getPrimary={item => item.nombre}
            getSecondary={item => item.quantity}
          />
        </Card>
      </List>
    </CardText>
    <CardActions>
      <Grid fluid>
        <Row center="xs">
          <Col className={styles.col} xs={12} sm={6}>
            <RaisedButton label="Enviar Comandas" onTouchTap={() => onSendOrderLines()} />
          </Col>
          <Col className={styles.col} xs={12} sm={6}>
            <RaisedButton label="Cerrar Orden" onTouchTap={() => onCloseOrder()} />
          </Col>
        </Row>
      </Grid>
    </CardActions>
  </Card>
);

OrderAddForm.propTypes = {
  order: PropTypes.object,
  promos: PropTypes.array,
  products: PropTypes.array,
  dishes: PropTypes.array,
  onSendOrderLines: PropTypes.func,
  onCloseOrder: PropTypes.func,
  linkPromo: PropTypes.string,
  linkProduct: PropTypes.string,
  linkDish: PropTypes.string,
};

export default OrderAddForm;
