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

  getReservation = () => {
    const { current, tables, timeZones } = this.props;
    if (!current || tables.length === 0 || timeZones.length === 0) return undefined;
    return {
      ...current,
      fecha: new Date(current.fecha),
      timeZone: timeZones.find(x => x.id === current.franjaId),
      table: tables.find(x => x.id === current.grupoDeMesasId),
    };
  }

  render() {
    const { timeZones, tables, editReservation } = this.props;
    return (
      <ReservationAddForm
        reservation={this.getReservation()}
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
