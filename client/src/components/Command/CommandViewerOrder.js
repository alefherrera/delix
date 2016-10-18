import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import styles from './style.css';
import CommandViewerItem from './CommandViewerItem';
import Divider from 'material-ui/Divider';
import { FormattedTime } from 'react-intl';

const CommandViewerOrder = ({ title, time, commands }) => (
  <Card className={styles.item}>
    <CardTitle
      title={title}
      subtitle={<FormattedTime value={time} />}
    />
    <CardText>
      {
        commands.map((command, i) => (
          <div key={i}>
            <CommandViewerItem
              command={command}
            />
            <Divider />
          </div>
        ))
      }
    </CardText>
  </Card>
);

CommandViewerOrder.propTypes = {
  title: PropTypes.string,
  time: PropTypes.string,
  commands: PropTypes.array,
};

export default CommandViewerOrder;
