import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/reservation';
import * as timeZoneActions from '../../actions/timeZone';
import ReservationAddForm from '../../components/Reservation/ReservationAddForm';

class ReservationAdd extends React.Component {

  componentDidMount() {
    const { getTimeZones, getReservationTables } = this.props;
    getTimeZones();
    getReservationTables();
  }

  render() {
    const { addReservation, timeZones, tables } = this.props;
    return (
      <ReservationAddForm
        timeZones={timeZones}
        tables={tables}
        onSave={addReservation}
      />
    );
  }

}

ReservationAdd.propTypes = {
  addReservation: PropTypes.func,
  timeZones: PropTypes.array,
  tables: PropTypes.array,
  getTimeZones: PropTypes.func,
  getReservationTables: PropTypes.func,
};

export default connect(
  state => ({
    timeZones: state.timeZone.list,
    tables: state.reservation.tables,
  }),
  {
    ...actions,
    getTimeZones: timeZoneActions.getTimeZones,
  }
)(ReservationAdd);
