import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';

const ReservationRow = ({ reservation, onClick, menu }) => (
  <ListItem
    disabled
    rightIconButton={menu}
    primaryText={
      <Grid onClick={onClick ? () => onClick(reservation) : null}>
        <Row>
          <Col xs>
            {reservation}
          </Col>
        </Row>
      </Grid>
    }
  />
);

ReservationRow.propTypes = {
  reservation: PropTypes.object,
  onClick: PropTypes.func,
  menu: PropTypes.any,
};

export default ReservationRow;
