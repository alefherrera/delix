import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import TimeZoneRow from './TimeZoneRow';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import rowMenu from '../rowMenu';

const TimeZoneForm = ({ timeZones, editTimeZone, deleteTimeZone, addLink }) => (
  <Card>
    <CardTitle title="Franjas" />
    <CardText>
      <List>
        {
          timeZones.map((timeZone, i) => (
            <div key={i}>
              <TimeZoneRow
                timeZone={timeZone}
                menu={
                  rowMenu(
                  () => editTimeZone(timeZone.id),
                  () => deleteTimeZone(timeZone.id))
                }
              />
            </div>
          ))
        }
      </List>
    </CardText>
    <Link to={addLink}>
      <Fab>
        <ContentAdd />
      </Fab>
    </Link>
  </Card>
);

TimeZoneForm.propTypes = {
  timeZones: PropTypes.array,
  editTimeZone: PropTypes.func,
  deleteTimeZone: PropTypes.func,
  addLink: PropTypes.string,
};

export default TimeZoneForm;
