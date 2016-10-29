import React, { PropTypes } from 'react';
import TimeZoneForm from '../components/TimeZone/TimeZoneForm';
import { connect } from 'react-redux';
import * as actions from '../actions/timeZone';

class TimeZone extends React.Component {

  componentDidMount() {
    this.props.getTimeZones();
  }

  handleEdit = id => {
    this.props.history.push(`franja/edit/${id}`);
  }

  render() {
    const { list, deleteTimeZone } = this.props;
    if (!list) return null;
    return (
      <TimeZoneForm
        timeZones={list}
        editTimeZone={this.handleEdit}
        deleteTimeZone={deleteTimeZone}
        addLink={'franja/add'}
      />
    );
  }

}

TimeZone.propTypes = {
  history: PropTypes.object,
  list: PropTypes.array,
  getTimeZones: PropTypes.func,
  deleteTimeZone: PropTypes.func,
};

export default connect(
  state => state.timeZone,
  { ...actions }
)(TimeZone);
