import React from 'react';
import io from 'socket.io-client';

class OrderViewer extends React.Component {

  componentWillMount() {
    this.props.getOrders();
    const socket = io('http://localhost:3001');
    socket.on('show', this.props.showOrderLine);
  }

  render() {
    return (
      <div />
    );
  }

}

export default OrderViewer;
