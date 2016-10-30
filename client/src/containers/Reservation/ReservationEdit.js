import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/reservation';
import * as timeZoneActions from '../../actions/timeZone';
import ReservationAddForm from '../../components/Reservation/ReservationAddForm';

class ReservationEdit extends React.Component {

  componentDidMount() {
    const { getReservation, getTimeZones, getReservationTables } = this.props;
    getReservation(this.props.params.reservationId);
    getTimeZones();
    getReservationTables();
  }

  render() {
    const { current, timeZones, tables, editReservation } = this.props;
    return (
      <ReservationAddForm
        reservation={current}
        timeZones={timeZones}
        tables={tables}
        onSave={editReservation}
      />
    );
  }

}

ReservationEdit.propTypes = {
  params: PropTypes.object,
  current: PropTypes.object,
  timeZones: PropTypes.array,
  tables: PropTypes.array,
  getReservation: PropTypes.func,
  editReservation: PropTypes.func,
  getTimeZones: PropTypes.func,
  getReservationTables: PropTypes.func,
};

export default connect(
  state => ({
    current: state.reservation.current,
    timeZones: state.timeZone.list,
    tables: state.reservation.tables,
  }),
  {
    ...actions,
    getTimeZones: timeZoneActions.getTimeZones,
  }
)(ReservationEdit);
