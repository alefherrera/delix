import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import PromoRow from './PromoRow';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';

const PromoForm = ({ promos }) => (
  <Card>
    <CardText>
      <List>
        {
          promos.map((promo, i) => (
            <Link key={i} to={`${location.pathname}/edit/${promo.id}`}>
              <PromoRow
                promo={promo}
              />
            </Link>
          ))
        }
      </List>
    </CardText>
    <Link to={`${location.pathname}/add`}>
      <Fab>
        <ContentAdd />
      </Fab>
    </Link>
  </Card>
);

PromoForm.propTypes = {
  promos: PropTypes.array,
};

export default PromoForm;
