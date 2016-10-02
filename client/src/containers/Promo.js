import React, { PropTypes } from 'react';
import PromoForm from '../components/Promo/PromoForm';
import { connect } from 'react-redux';
import * as actions from '../actions/promo';

class Promo extends React.Component {

  componentWillMount() {
    this.props.getPromos();
  }

  render() {
    const { list } = this.props;
    return (
      <PromoForm promos={list} />
    );
  }

}

Promo.propTypes = {
  list: PropTypes.array,
  getPromos: PropTypes.func,
};

export default connect(state => state.promo, { ...actions })(Promo);
