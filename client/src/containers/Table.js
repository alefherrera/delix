import React, { PropTypes } from 'react';
import TableForm from '../components/Table/TableForm';
import { connect } from 'react-redux';
import * as actions from '../actions/table';
import * as orderActions from '../actions/order';

class Table extends React.Component {

  componentDidMount() {
    const { getTable, params } = this.props;
    getTable(params.mesaId);
  }

  isBusy = () => this.props.current.grupoDeMesasEstadoId === 2;

  handleTableClick = () => {
    if (this.isBusy()) {
      this.props.freeTable(this.props.params.mesaId);
    } else {
      this.props.takeTable(this.props.params.mesaId);
    }
  }

  handleOrderClick = () => {
    this.props.createOrder({
      usuarioId: 1,
      grupoDeMesasId: this.props.params.mesaId,
    });
  }

  render() {
    const { current } = this.props;
    if (!current) return null;
    return (
      <TableForm
        title={current.nombre}
        isBusy={this.isBusy()}
        onTableClick={this.handleTableClick}
        onOrderClick={this.handleOrderClick}
      />
    );
  }

}

Table.propTypes = {
  createOrder: PropTypes.func,
  getTable: PropTypes.func,
  takeTable: PropTypes.func,
  freeTable: PropTypes.func,
  params: PropTypes.object,
  current: PropTypes.object,
};

export default connect(
  state => state.table,
  {
    ...actions,
    ...orderActions,
  }
)(Table);
