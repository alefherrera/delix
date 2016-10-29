import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/reservation';
import ReservationAddForm from '../../components/Reservation/ReservationAddForm';

class ReservationEdit extends React.Component {

  componentDidMount() {
    this.props.getReservation(this.props.params.reservationId);
  }

  render() {
    const { current, editReservation } = this.props;
    return (
      <ReservationAddForm
        reservation={current}
        onSave={editReservation}
      />
    );
  }

}

ReservationEdit.propTypes = {
  params: PropTypes.object,
  current: PropTypes.object,
  getReservation: PropTypes.func,
  editReservation: PropTypes.func,
};

export default connect(
  state => state.timeZone,
  { ...actions }
)(ReservationEdit);
