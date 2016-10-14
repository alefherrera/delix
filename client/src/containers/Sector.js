import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SectorForm from '../components/Sector/SectorForm';
import * as actions from '../actions/sector';
class Table extends React.Component {

  componentWillMount() {
    this.props.getSectors();
  }

  render() {
    const { list } = this.props;
    if (!list) return null;
    return (
      <SectorForm
        sectors={list}
      />
    );
  }

}

Table.propTypes = {
  list: PropTypes.array,
  getSectors: PropTypes.func,
};

export default connect(
  state => state.sector,
  { ...actions }
)(Table);
