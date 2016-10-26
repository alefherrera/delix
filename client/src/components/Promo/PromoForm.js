import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import PromoRow from './PromoRow';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import rowMenu from '../rowMenu';

const PromoForm = ({ promos, editPromo, deletePromo, addLink }) => (
  <Card>
    <CardTitle title="Promos" />
    <CardText>
      <List>
        {
          promos.map((promo, i) => (
            <div key={i}>
              <PromoRow
                promo={promo}
                menu={
                  rowMenu(
                  () => editPromo(promo.id),
                  () => deletePromo(promo.id))
                }
              />
            </div>
          ))
        }
      </List>
    </CardText>
    <Link to={addLink}>
      <Fab>
        <ContentAdd />
      </Fab>
    </Link>
  </Card>
);

PromoForm.propTypes = {
  promos: PropTypes.array,
  editPromo: PropTypes.func,
  deletePromo: PropTypes.func,
  addLink: PropTypes.string,
};

export default PromoForm;
