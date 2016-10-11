import React, { PropTypes } from 'react';
import CommandViewerItem from './CommandViewerItem';

const CommandViewerForm = ({ orders }) => (
  <div>
    {
      orders.map((order, i) => (
        <CommandViewerItem
          key={i}
          order={order}
        />
      ))
    }
  </div>
);

CommandViewerForm.propTypes = {
  orders: PropTypes.array,
};

export default CommandViewerForm;
