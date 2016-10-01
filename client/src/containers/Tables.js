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

  handleTableSet(table) {
    this.props.setTable(table);
  }

  render() {
    const { tables } = this.props;
    if (!tables) return null;
    return (
      <TableForm
        tables={tables}
        onSetTable={this.handleTableSet}
      />
    );
  }

}

Tables.propTypes = {
  tables: PropTypes.array,
  getTables: PropTypes.func,
  setTable: PropTypes.func,
};

export default connect(
  state => state.table,
  { ...actions }
)(Tables);
