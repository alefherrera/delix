import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import SectorForm from '../../components/Sector/SectorForm';
import * as actions from '../../actions/sector';

class Sector extends React.Component {

  componentDidMount() {
    this.props.getSectors();
  }

  handleSelect = tableId => {
    this.props.history.push(`/sector/${tableId}`);
  }

  render() {
    const { list } = this.props;
    if (!list) return null;
    return (
      <SectorForm
        sectors={list}
        onTableSelect={this.handleSelect}
      />
    );
  }

}

Sector.propTypes = {
  list: PropTypes.array,
  getSectors: PropTypes.func,
  history: PropTypes.object,
};

export default connect(
  state => state.sector,
  {
    ...actions,
  }
)(Sector);
