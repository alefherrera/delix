import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import OrderLineList from './OrderLineList';
import styles from './style.css';

const OrderAddForm = (
  { onSendOrderLines, onCloseOrder,
    linkPromo, linkProduct, linkDish, order,
    promoStatusClick, promoRemoveClick,
    productStatusClick, productRemoveClick,
    dishStatusClick, dishRemoveClick,
  }) => (
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
            items={order.promos}
            getPrimary={item => item.nombre}
            getSecondary={item => item.quantity}
            statusClick={promoStatusClick}
            removeClick={promoRemoveClick}
          />
          <Divider />
          <OrderLineList
            title="Productos"
            link={linkProduct}
            items={order.products}
            getPrimary={item => item.descripcion}
            getSecondary={item => item.quantity}
            statusClick={productStatusClick}
            removeClick={productRemoveClick}
          />
          <Divider />
          <OrderLineList
            title="Platos"
            link={linkDish}
            items={order.dishes}
            getPrimary={item => item.nombre}
            getSecondary={item => item.quantity}
            statusClick={dishStatusClick}
            removeClick={dishRemoveClick}
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
  onSendOrderLines: PropTypes.func,
  onCloseOrder: PropTypes.func,
  linkPromo: PropTypes.string,
  linkProduct: PropTypes.string,
  linkDish: PropTypes.string,
  promoStatusClick: PropTypes.func,
  promoRemoveClick: PropTypes.func,
  productStatusClick: PropTypes.func,
  productRemoveClick: PropTypes.func,
  dishStatusClick: PropTypes.func,
  dishRemoveClick: PropTypes.func,
};

export default OrderAddForm;
