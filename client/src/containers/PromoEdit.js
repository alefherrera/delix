import React, { PropTypes } from 'react';
import PromoAddForm from '../components/Promo/PromoAddForm';
import * as actions from '../actions/promo';
import { connect } from 'react-redux';

class PromoEdit extends React.Component {

  componentWillMount() {
    const { getPromo, params } = this.props;
    getPromo(params.promoId);
  }

  render() {
    const { current, editPromo } = this.props;

    return (
      <PromoAddForm promo={current} onSave={editPromo} />
    );
  }

}

PromoEdit.propTypes = {
  editPromo: PropTypes.func,
  getPromo: PropTypes.func,
  params: PropTypes.object,
  current: PropTypes.object,
};

export default connect(state => state.promo, { ...actions })(PromoEdit);
