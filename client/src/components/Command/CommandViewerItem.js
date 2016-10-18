import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import styles from './style.css';

const CommandViewerItem = ({ title, time, commands }) => (
  <Card className={styles.item}>
    <CardTitle title={title || 'Pedido'} subtitle={time} />
    <CardText>
      {
        commands.map((command, i) => (
          <div key={i}>
            {command.text || 'comanda'}
          </div>
        ))
      }
    </CardText>
  </Card>
);

CommandViewerItem.propTypes = {
  title: PropTypes.object,
  time: PropTypes.instanceOf(Date),
  commands: PropTypes.array,
};

export default CommandViewerItem;
