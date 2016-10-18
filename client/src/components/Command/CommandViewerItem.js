import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';

const CommandViewerItem = ({ command }) => (
  <ListItem
    disabled
    secondaryTextLines={2}
    primaryText={command.text}
    secondaryText={command.createdAt}
  />
);

CommandViewerItem.propTypes = {
  command: PropTypes.object,
};

export default CommandViewerItem;
