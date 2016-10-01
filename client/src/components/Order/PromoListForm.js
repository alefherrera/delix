import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const PromoListForm = ({ promos, onFilter, onSelect }) => (
  <Card>
    <CardText>
      <TextField hintText="Buscar" onChange={e => onFilter(e.target.value)} />
      <Card>
        <List>
          {
            promos.map((promo, i) => (
              <div key={i}>
                <ListItem
                  primaryText={promo.nombre}
                  onTouchTap={() => onSelect(promo)}
                />
                <Divider />
              </div>
            ))
          }
        </List>
      </Card>
    </CardText>
  </Card>
);

PromoListForm.propTypes = {
  promos: PropTypes.array,
  onSelect: PropTypes.func,
  onFilter: PropTypes.func,
};

export default PromoListForm;
