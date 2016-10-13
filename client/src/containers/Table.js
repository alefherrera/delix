import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TableForm from '../components/Table/TableForm';
import * as actions from '../actions/table';
class Table extends React.Component {

  componentWillMount() {
    this.props.getSectors();
    this.props.getTables();
  }

  render() {
    const { list } = this.props;
    if (!list) return null;
    return (
      <TableForm
        tables={list}
      />
    );
  }

}

Table.propTypes = {
  list: PropTypes.array,
  getTables: PropTypes.func,
};

export default connect(
  state => state.table,
  { ...actions }
)(Table);
