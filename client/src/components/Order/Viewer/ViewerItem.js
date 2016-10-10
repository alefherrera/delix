import React, { PropTypes } from 'react';

const ViewerItem = ({ order }) => (
  <div>
    {
      order
    }
  </div>
);

ViewerItem.propTypes = {
  order: PropTypes.object,
};

export default ViewerItem;
