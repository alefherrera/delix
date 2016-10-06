import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import TableForm from '../components/Table/TableForm';
import * as actions from '../actions/table';
class Tables extends React.Component {

  constructor(props) {
    super(props);
    this.handleTableSet = this.handleTableSet.bind(this);
  }

  componentWillMount() {
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

Tables.propTypes = {
  list: PropTypes.array,
  getTables: PropTypes.func,
};

export default connect(
  state => state.table,
  { ...actions }
)(Tables);
