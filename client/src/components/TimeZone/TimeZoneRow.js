import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FormattedTime } from 'react-intl';

const TimeZoneRow = ({ timeZone, onClick, menu }) => (
  <ListItem
    disabled
    rightIconButton={menu}
    primaryText={
      <Grid onClick={onClick ? () => onClick(timeZone) : null}>
        <Row>
          <Col xs>
            <FormattedTime value={timeZone.horaInicio} />
          </Col>
          <Col xs>
            <FormattedTime value={timeZone.horaFin} />
          </Col>
        </Row>
      </Grid>
    }
  />
);

TimeZoneRow.propTypes = {
  timeZone: PropTypes.object,
  onClick: PropTypes.func,
  menu: PropTypes.any,
};

export default TimeZoneRow;
