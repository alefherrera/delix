import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';

const PromoForm = ({ promos }) => (
  <Card>
    <CardText>
      <List>
        {
          promos.map((promo, i) => (
            <ListItem
              key={i}
              primaryText={promo.nombre}
            />
          ))
        }
      </List>
    </CardText>
  </Card>
);

PromoForm.propTypes = {
  promos: PropTypes.array,
};

export default PromoForm;
