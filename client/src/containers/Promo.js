import React, { PropTypes } from 'react';
import PromoForm from '../components/Promo/PromoForm';
import { connect } from 'react-redux';
import * as actions from '../actions/promo';

class Promo extends React.Component {

  componentWillMount() {
    this.props.getPromos();
  }

  handleSelect = id => {
    this.props.history.push(`promo/edit/${id}`);
  }

  render() {
    const { list, deletePromo } = this.props;
    return (
      <PromoForm
        promos={list}
        editPromo={this.handleSelect}
        deletePromo={deletePromo}
        addLink={'promo/add'}
      />
    );
  }

}

Promo.propTypes = {
  list: PropTypes.array,
  getPromos: PropTypes.func,
  deletePromo: PropTypes.func,
  history: PropTypes.object,
};

export default connect(
  state => state.promo,
  {
    ...actions,
  })(Promo);
