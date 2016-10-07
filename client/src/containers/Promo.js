import React, { PropTypes } from 'react';
import PromoForm from '../components/Promo/PromoForm';
import { connect } from 'react-redux';
import * as actions from '../actions/promo';
import { push } from 'react-router-redux';

class Promo extends React.Component {

  componentWillMount() {
    this.props.getPromos();
  }

  render() {
    const { list, goEditPromo, deletePromo } = this.props;
    return (
      <PromoForm
        promos={list}
        editPromo={goEditPromo}
        deletePromo={deletePromo}
      />
    );
  }

}

Promo.propTypes = {
  list: PropTypes.array,
  getPromos: PropTypes.func,
  goEditPromo: PropTypes.func,
  deletePromo: PropTypes.func,
};

export default connect(
  state => state.promo,
  {
    ...actions,
    goEditPromo: id => push(`${location.pathname}/edit/${id}`),
  })(Promo);
