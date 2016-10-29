import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/timeZone';
import TimeZoneAddForm from '../../components/TimeZone/TimeZoneAddForm';

const TimeZoneAdd = ({ addTimeZone }) => (
  <TimeZoneAddForm onSave={addTimeZone} />
);

TimeZoneAdd.propTypes = {
  addTimeZone: PropTypes.func,
};

export default connect(
  state => state.timeZone,
  { ...actions }
)(TimeZoneAdd);
