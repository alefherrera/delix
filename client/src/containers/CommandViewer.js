import React, { PropTypes } from 'react';
import io from '../util/io';
import CommandViewerForm from '../components/Command/CommandViewerForm';
import { connect } from 'react-redux';
import * as actions from '../actions/command';

class CommandViewer extends React.Component {

  componentWillMount() {
    this.props.getCommands();
    const socket = io();
    socket.on('add', this.props.addCommands);
    socket.on('delete:command', this.props.deleteCommand);
    socket.on('delete', this.props.deleteCommands);
  }

  render() {
    const { list } = this.props;
    if (!list) return null;
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
  addCommands: PropTypes.func,
  deleteCommand: PropTypes.func,
  deleteCommands: PropTypes.func,
};

export default connect(
  state => state.command,
  { ...actions }
)(CommandViewer);
