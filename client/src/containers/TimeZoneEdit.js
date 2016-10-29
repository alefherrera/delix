import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/timeZone';
import TimeZoneAddForm from '../components/TimeZone/TimeZoneAddForm';

class TimeZoneEdit extends React.Component {

  componentDidMount() {
    this.props.getTimeZone(this.props.params.timeZoneId);
  }

  render() {
    const { current, editTimeZone } = this.props;
    return (
      <TimeZoneAddForm
        timeZone={current}
        onSave={editTimeZone}
      />
    );
  }

}

TimeZoneEdit.propTypes = {
  params: PropTypes.object,
  current: PropTypes.object,
  getTimeZone: PropTypes.func,
  editTimeZone: PropTypes.func,
};

export default connect(
  state => state.timeZone,
  { ...actions }
)(TimeZoneEdit);
