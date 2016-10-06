import React, { PropTypes } from 'react';
import PromoAddForm from '../components/Promo/PromoAddForm';
import * as actions from '../actions/promo';
import { connect } from 'react-redux';

const PromoAdd = ({ addPromo }) => (
  <PromoAddForm onSave={addPromo} />
);

PromoAdd.propTypes = {
  addPromo: PropTypes.func,
};

export default connect(null, { ...actions })(PromoAdd);
