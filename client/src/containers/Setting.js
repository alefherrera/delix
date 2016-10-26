import React, { PropTypes } from 'react';
import SettingForm from '../components/Setting/SettingForm';
import * as actions from '../actions/setting';
import { connect } from 'react-redux';

const Setting = ({ setHostName }) => (
  <SettingForm saveSetting={setHostName} />
);

Setting.propTypes = {
  setHostName: PropTypes.func,
};

export default connect(null, { ...actions })(Setting);
