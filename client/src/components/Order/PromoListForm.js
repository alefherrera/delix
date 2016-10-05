import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import styles from './style.css';

const PromoListForm = ({ promos, onFilter, onSelect }) => (
  <Card>
    <CardText>
      <TextField hintText="Buscar" onChange={e => onFilter(e.target.value)} />
      <div>
        {
          promos.map((promo, i) => (
            <Card key={i} className={styles.promos}>
              <CardTitle
                className={styles.promoTitle}
                title={promo.nombre}
                onClick={() => onSelect(promo)}
              />
              <CardText>
                <List>
                  <Subheader>Platos</Subheader>
                  {
                    promo.platosPorPromos && promo.platosPorPromos.map((plato, j) => (
                      <ListItem
                        disabled
                        key={j}
                        primaryText={plato.plato.nombre}
                        secondaryText={plato.plato.descripcion}
                      />
                    ))
                  }
                </List>
                <List>
                  <Subheader>Productos</Subheader>
                  {
                    promo.productosPorPromos && promo.productosPorPromos.map((producto, j) => (
                      <ListItem
                        disabled
                        key={j}
                        primaryText={producto.producto.descripcion}
                      />
                    ))
                  }
                </List>
              </CardText>
            </Card>
          ))
        }
      </div>
    </CardText>
  </Card>
);

PromoListForm.propTypes = {
  promos: PropTypes.array,
  onSelect: PropTypes.func,
  onFilter: PropTypes.func,
};

export default PromoListForm;
