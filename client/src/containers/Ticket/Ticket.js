import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/ticket';
import TicketForm from '../../components/Ticket/TicketForm';

class Ticket extends React.Component {

  componentDidMount() {
    this.props.getTickets();
  }

  render() {
    const { list } = this.props;
    if (!list) return null;
    return (
      <TicketForm
        tickets={list}
      />
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
