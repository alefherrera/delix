import React, { PropTypes } from 'react';
import io from 'socket.io-client';
import { HOST } from '../util/api/api';
import CommandViewerForm from '../components/Command/CommandViewerForm';
import { connect } from 'react-redux';
import * as actions from '../actions/command';

class CommandViewer extends React.Component {

  componentWillMount() {
    this.props.getCommands();
    const socket = io(HOST);
    socket.on('add', this.props.addCommand);
    socket.on('delete', this.props.deleteCommand);
  }

  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list &&
            <CommandViewerForm
              orders={list}
            />
        }
      </div>
    );
  }

}

CommandViewer.propTypes = {
  list: PropTypes.array,
  getCommands: PropTypes.func,
  addCommand: PropTypes.func,
  deleteCommand: PropTypes.func,
};

export default connect(
  state => state.command,
  { ...actions }
)(CommandViewer);
