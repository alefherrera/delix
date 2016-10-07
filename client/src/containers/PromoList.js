import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PromoListForm from '../components/Order/PromoListForm';
import * as actions from '../actions/promo';

class PromoList extends React.Component {

  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  componentWillMount() {
    this.props.getPromos();
  }

  handleSelect(promo) {
    this.props.setPromo(promo);
  }

  handleFilter(filter) {
    this.props.filterPromos(filter);
  }

  render() {
    const { list } = this.props;
    return (
      <PromoListForm
        promos={list}
        onFilter={this.handleFilter}
        onSelect={this.handleSelect}
      />
    );
  }

}

PromoList.propTypes = {
  list: PropTypes.array,
  getPromos: PropTypes.func,
  setPromo: PropTypes.func,
  filterPromos: PropTypes.func,
};

export default connect(
  state => state.promo,
  { ...actions }
)(PromoList);
