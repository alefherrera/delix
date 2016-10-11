import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';

const CommandViewerItem = ({ title, time, commands }) => (
  <Card>
    <CardTitle title={title} subtitle={time} />
    <CardText>
      {
        commands.map((command, i) => (
          <div key={i}>
            {command.text}
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
