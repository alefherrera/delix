import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import styles from './style.css';
import CommandViewerItem from './CommandViewerItem';
import Divider from 'material-ui/Divider';

const CommandViewerOrder = ({ title, time, commands }) => (
  <Card className={styles.item}>
    <CardTitle title={title} subtitle={time} />
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
  title: PropTypes.object,
  time: PropTypes.instanceOf(Date),
  commands: PropTypes.array,
};

export default CommandViewerOrder;
