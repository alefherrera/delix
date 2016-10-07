import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';

const OrderAddForm = (
  { promos, products, dishes, onCloseOrder,
    linkPromo, linkProduct, linkDish }) => (
  <Card>
    <CardTitle>
      Pedido
    </CardTitle>
    <CardText>
      <List>
        <Card>
          <ListItem
            disabled
            open
            primaryText="Promociones"
            rightIcon={
              <Link to={linkPromo}>
                <ContentAdd />
              </Link>
            }
            nestedItems={
              promos && promos.map((promo, i) => (
                <ListItem
                  key={i}
                  disabled
                  primaryText={promo.selected.nombre}
                  secondaryText={promo.quantity}
                />
              ))
            }
          />
          <Divider />
          <ListItem
            disabled
            open
            primaryText="Productos"
            rightIcon={
              <Link to={linkProduct}>
                <ContentAdd />
              </Link>
            }
            nestedItems={
              products && products.map((product, i) => (
                <ListItem
                  key={i}
                  disabled
                  primaryText={product.selected.descripcion}
                  secondaryText={product.quantity}
                />
              ))
            }
          />
          <Divider />
          <ListItem
            disabled
            open
            primaryText="Platos"
            rightIcon={
              <Link to={linkDish}>
                <ContentAdd />
              </Link>
            }
            nestedItems={
              dishes && dishes.map((dish, i) => (
                <ListItem
                  key={i}
                  disabled
                  primaryText={dish.selected.nombre}
                  secondaryText={dish.quantity}
                />
              ))
            }
          />
        </Card>
      </List>
    </CardText>
    <CardActions>
      <Grid fluid>
        <Row center="xs">
          <Col xs>
            <RaisedButton label="Enviar Comandas" onTouchTap={() => onCloseOrder()} />
          </Col>
        </Row>
      </Grid>
    </CardActions>
  </Card>
);

OrderAddForm.propTypes = {
  promos: PropTypes.array,
  products: PropTypes.array,
  dishes: PropTypes.array,
  onCloseOrder: PropTypes.func,
  linkPromo: PropTypes.string,
  linkProduct: PropTypes.string,
  linkDish: PropTypes.string,
};

export default OrderAddForm;
