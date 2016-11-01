import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/ticket';
import TicketForm from '../../components/Ticket/TicketForm';
import TicketPayForm from '../../components/Ticket/TicketPayForm';
import Dialog from 'material-ui/Dialog';

class Ticket extends React.Component {

  state = {
    open: false,
  }

  componentDidMount() {
    const { getTickets, getPaymentTypes } = this.props;
    getTickets();
    getPaymentTypes();
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  handleItemClick = ticket => {
    this.setState({ pedidoId: ticket.id, open: true });
  }

  handlePaySave = state => {
    this.props.payTicket({
      ...state,
      pedidoId: this.state.pedidoId,
    });
  }

  render() {
    const { list, types } = this.props;
    if (!list) return null;
    return (
      <div>
        <TicketForm
          tickets={list}
          onItemClick={this.handleItemClick}
        />
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
          bodyStyle={{ padding: 0 }}
        >
          <TicketPayForm
            paymentTypes={types}
          />
        </Dialog>
      </div>

    );
  }

}

Ticket.propTypes = {
  list: PropTypes.array,
  types: PropTypes.array,
  getTickets: PropTypes.func,
  payTicket: PropTypes.func,
  getPaymentTypes: PropTypes.func,
};

export default connect(
  state => state.ticket,
  { ...actions }
)(Ticket);
