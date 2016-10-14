import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SectorForm from '../components/Sector/SectorForm';
import * as actions from '../actions/sector';
import { push } from 'react-router-redux';

class Table extends React.Component {

  componentWillMount() {
    this.props.getSectors();
  }

  render() {
    const { list, goToOrder } = this.props;
    if (!list) return null;
    return (
      <SectorForm
        sectors={list}
        onTableSelect={goToOrder}
      />
    );
  }

}

Table.propTypes = {
  list: PropTypes.array,
  getSectors: PropTypes.func,
  goToOrder: PropTypes.func,
};

export default connect(
  state => state.sector,
  {
    ...actions,
    goToOrder: tableId => push(`${location.pathname}/${tableId}`),
  }
)(Table);
