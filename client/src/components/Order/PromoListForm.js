import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import PromoRow from '../Promo/PromoRow';

const PromoListForm = ({ promos, onFilter, onSelect }) => (
  <Card>
    <CardText>
      <TextField hintText="Buscar" onChange={e => onFilter(e.target.value)} />
      <div>
        {
          promos.map((promo, i) => (
            <PromoRow
              key={i}
              promo={promo}
              onClick={onSelect}
            />
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
