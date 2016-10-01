import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';

const PromoListForm = ({ promos }) => (
  <Card>
    <CardText>
      <AutoComplete
        hintText="Promociones"
        dataSource={promos}
      />
    </CardText>
  </Card>
);

PromoListForm.propTypes = {
  promos: PropTypes.array,
};

export default PromoListForm;
