import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/reservation';
import ReservationAddForm from '../../components/Reservation/ReservationAddForm';

const ReservationAdd = ({ addReservation }) => (
  <ReservationAddForm onSave={addReservation} />
);

ReservationAdd.propTypes = {
  addReservation: PropTypes.func,
};

export default connect(
  state => state.timeZone,
  { ...actions }
)(ReservationAdd);
