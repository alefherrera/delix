import React, { PropTypes } from 'react';
import ReservationForm from '../../components/Reservation/ReservationForm';
import { connect } from 'react-redux';
import * as actions from '../../actions/reservation';

class Reservation extends React.Component {

  componentDidMount() {
    this.props.getReservations();
  }

  handleEdit = id => {
    this.props.history.push(`reserva/edit/${id}`);
  }

  render() {
    const { list, deleteReservation } = this.props;
    if (!list) return null;
    return (
      <ReservationForm
        reservations={list}
        editReservation={this.handleEdit}
        deleteReservation={deleteReservation}
        addLink={'reserva/add'}
      />
    );
  }

}

Reservation.propTypes = {
  history: PropTypes.object,
  list: PropTypes.array,
  getReservations: PropTypes.func,
  deleteReservation: PropTypes.func,
};

export default connect(
  state => state.reservation,
  { ...actions }
)(Reservation);
