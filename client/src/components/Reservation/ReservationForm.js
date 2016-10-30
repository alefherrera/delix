import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import ReservationRow from './ReservationRow';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import rowMenu from '../rowMenu';

const ReservationForm = ({ reservations, editReservation, deleteReservation, addLink }) => (
  <Card>
    <CardTitle title="Reservas" />
    <CardText>
      <List>
        {
          reservations.map((reservation, i) => (
            <div key={i}>
              <ReservationRow
                reservation={reservation}
                menu={
                  rowMenu(
                  () => editReservation(reservation.id),
                  () => deleteReservation(reservation.id))
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

ReservationForm.propTypes = {
  reservations: PropTypes.array,
  editReservation: PropTypes.func,
  deleteReservation: PropTypes.func,
  addLink: PropTypes.string,
};

export default ReservationForm;
