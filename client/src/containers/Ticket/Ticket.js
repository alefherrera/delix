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
    this.props.getTickets();
  }

  handleRequestClose = () => {
    this.setState({ open: false });
  }

  handleItemClick = () => {
    this.setState({ open: true });
  }

  render() {
    const { list } = this.props;
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
          <TicketPayForm />
        </Dialog>
      </div>

    );
  }

}

Ticket.propTypes = {
  list: PropTypes.array,
  getTickets: PropTypes.func,
};

export default connect(
  state => state.ticket,
  { ...actions }
)(Ticket);
