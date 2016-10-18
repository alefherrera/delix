import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { FormattedTime } from 'react-intl';

const CommandViewerItem = ({ command }) => (
  <ListItem
    disabled
    secondaryTextLines={2}
    primaryText={command.text}
    secondaryText={<FormattedTime value={command.createdAt} />}
  />
);

CommandViewerItem.propTypes = {
  command: PropTypes.object,
};

export default CommandViewerItem;
