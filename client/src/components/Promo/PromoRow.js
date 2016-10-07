import React, { PropTypes } from 'react';
import styles from './style.css';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import ProductRow from '../Product/ProductRow';
import DishRow from '../Dish/DishRow';
import { Grid, Row, Col } from 'react-flexbox-grid';

const PromoRow = ({ promo, onClick, menu }) => (
  <Card className={styles.promos} onClick={onClick ? () => onClick(promo) : null}>
    <CardText>
      <CardTitle
        title={promo.nombre}
      />
      <Grid className={styles.menu}>
        <Row end="xs">
          <Col xs>
            {
              menu
            }
          </Col>
        </Row>
      </Grid>
    </CardText>
    <CardText className={styles.content}>
      <List>
        <Subheader>Platos</Subheader>
        {
          promo.platosPorPromos && promo.platosPorPromos.map((plato, j) => (
            <DishRow
              key={j}
              disabled
              dish={plato.plato}
            />
          ))
        }
      </List>
      <List>
        <Subheader>Productos</Subheader>
        {
          promo.productosPorPromos && promo.productosPorPromos.map((producto, j) => (
            <ProductRow
              key={j}
              disabled
              product={producto.producto}
            />
          ))
        }
      </List>
      <Grid>
        <Row>
          <Col xs={9}>
            <ListItem
              disabled
              primaryText="Total"
            />
          </Col>
          <Col xs={3}>
            <ListItem
              disabled
              primaryText={`$${promo.precio.total}`}
              secondaryText={`$${promo.precio.subTotal} - $${promo.precio.descuento}`}
            />
          </Col>
        </Row>
      </Grid>
    </CardText>
  </Card>
);

PromoRow.propTypes = {
  promo: PropTypes.object,
  onClick: PropTypes.func,
  menu: PropTypes.any,
};

export default PromoRow;
