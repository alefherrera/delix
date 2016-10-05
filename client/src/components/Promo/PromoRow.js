import React, { PropTypes } from 'react';
import styles from './style.css';
import { List } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import ProductRow from '../Product/ProductRow';
import DishRow from '../Dish/DishRow';

const PromoRow = ({ promo, onClick }) => (
  <Card className={styles.promos}>
    <CardTitle
      className={styles.promoTitle}
      title={promo.nombre}
      onClick={() => onClick(promo)}
    />
    <CardText>
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
    </CardText>
  </Card>
);

PromoRow.propTypes = {
  promo: PropTypes.object,
  onClick: PropTypes.func,
};

export default PromoRow;
