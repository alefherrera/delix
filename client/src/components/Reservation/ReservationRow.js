import React, { PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FormattedDate } from 'react-intl';

const ReservationRow = ({ reservation, onClick, menu }) => (
  <ListItem
    disabled
    rightIconButton={menu}
    primaryText={
      <Grid onClick={onClick ? () => onClick(reservation) : null}>
        <Row>
          <Col xs>
            {`${reservation.grupoDeMesas.nombre} - ${reservation.franja.nombre}`}
          </Col>
          <Col xs>
            <FormattedDate value={reservation.fecha} />
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
