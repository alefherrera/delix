import React, { PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FloatingActionButton from 'material-ui/FloatingActionButton';
const OrderAddForm = (
  { promos, products, dishes, onCloseOrder,
    linkPromo, linkProduct, linkDish }) => (
  <Card>
    <CardTitle>
      Pedido
    </CardTitle>
    <CardText>
      <Grid fluid>
        <Row>
          <Col xs>
            <Subheader inset>Promociones</Subheader>
          </Col>
          <Col xs>
            <Link to={linkPromo}>
              <FloatingActionButton mini>
                <ContentAdd />
              </FloatingActionButton>
            </Link>
          </Col>
        </Row>
      </Grid>
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
      <Grid fluid>
        <Row>
          <Col xs>
            <Subheader inset>Productos</Subheader>
          </Col>
          <Col xs>
            <Link to={linkProduct}>
              <FloatingActionButton mini>
                <ContentAdd />
              </FloatingActionButton>
            </Link>
          </Col>
        </Row>
      </Grid>
      <List>
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
      <Grid fluid>
        <Row>
          <Col xs>
            <Subheader inset>Platos</Subheader>
          </Col>
          <Col xs>
            <Link to={linkDish}>
              <FloatingActionButton mini>
                <ContentAdd />
              </FloatingActionButton>
            </Link>
          </Col>
        </Row>
      </Grid>
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
