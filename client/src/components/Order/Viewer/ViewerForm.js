import React, { PropTypes } from 'react';
import ViewerItem from './ViewerItem';

const ViewerForm = ({ orders }) => (
  <div>
    {
      orders.map((order, i) => (
        <ViewerItem
          key={i}
          order={order}
        />
      ))
    }
  </div>
);

ViewerForm.propTypes = {
  orders: PropTypes.array,
};

export default ViewerForm;
