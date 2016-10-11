import React, { PropTypes } from 'react';

const CommandViewerItem = ({ order }) => (
  <div>
    {
      order
    }
  </div>
);

CommandViewerItem.propTypes = {
  order: PropTypes.object,
};

export default CommandViewerItem;
