import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const OrderAddForm = ({ promos, products, dishes, addLink, onCloseOrder }) => (
  <Card>
    <CardText>
      Pedido Add
    </CardText>
    <CardText>
      <List>
        <Subheader inset>Productos</Subheader>
        {
          products && products.map((product, i) => (
            <ListItem
              key={i}
              primaryText={product.selected.descripcion}
              secondaryText={product.quantity}
            />
          ))
        }
      </List>
      <Subheader inset>Promociones</Subheader>
      <List>
        {
          promos && promos.map((promo, i) => (
            <ListItem
              key={i}
              primaryText={promo.selected.nombre}
              secondaryText={promo.quantity}
            />
          ))
        }
      </List>
      <Subheader inset>Platos</Subheader>
      <List>
        {
          dishes && dishes.map((dish, i) => (
            <ListItem
              key={i}
              primaryText={dish.selected.nombre}
              secondaryText={dish.quantity}
            />
          ))
        }
      </List>
    </CardText>
    <CardActions>
      <Grid fluid>
        <Row center="xs">
          <Col xs>
            <Link to={addLink}>
              <RaisedButton label="Agregar Comanda" />
            </Link>
          </Col>
          <Col xs>
            <RaisedButton label="Enviar Comandas" onTouchTap={() => onCloseOrder()} />
          </Col>
        </Row>
      </Grid>
    </CardActions>
  </Card>
);

OrderAddForm.propTypes = {
  addLink: PropTypes.string,
  promos: PropTypes.array,
  products: PropTypes.array,
  dishes: PropTypes.array,
  onCloseOrder: PropTypes.func,
};

export default OrderAddForm;
