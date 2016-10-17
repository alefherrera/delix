import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import OrderLineList from './OrderLineList';

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
          <Col xs>
            <RaisedButton label="Enviar Comandas" onTouchTap={() => onSendOrderLines()} />
          </Col>
          <Col xs>
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
