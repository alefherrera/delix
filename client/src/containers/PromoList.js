import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PromoListForm from '../components/Order/PromoListForm';
import * as actions from '../actions/promo';

class PromoList extends React.Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentWillMount() {
    this.props.getPromos();
  }

  handleSelect(promo) {
    this.props.setPromo(promo);
  }

  render() {
    const { list } = this.props;
    return (
      <PromoListForm
        promos={list}
        onSelect={this.handleSelect}
      />
    );
  }

}

PromoList.propTypes = {
  list: PropTypes.array,
  getPromos: PropTypes.func,
  setPromo: PropTypes.func,
};

export default connect(
  state => state.promo,
  { ...actions }
)(PromoList);
