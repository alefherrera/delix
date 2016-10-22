import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import Close from 'material-ui/svg-icons/navigation/close';
import Send from 'material-ui/svg-icons/content/send';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

const OrderLineListItem = ({ items, getPrimary, getSecondary }) => (
  <Grid fluid>
    <Row>
      <Col xs={8}>
        Descripcion
      </Col>
      <Col xs={1}>
        #
      </Col>
      <Col xs={3}>
        Estado
      </Col>
    </Row>
    <Divider />
    {
      items && items.map((item, i) => (
        <Row key={i} middle="xs">
          <Col xs={8}>
            {getPrimary(item)}
          </Col>
          <Col xs={1}>
            {getSecondary(item)}
          </Col>
          <Col xs={3}>
            <IconButton>
              <Restaurant />
            </IconButton>
            <IconButton>
              <Close />
            </IconButton>
          </Col>
        </Row>
      )
      )
    }

  </Grid>
);

OrderLineListItem.propTypes = {
  saved: PropTypes.array,
  items: PropTypes.array,
  getPrimary: PropTypes.func,
  getSecondary: PropTypes.func,
};

export default OrderLineListItem;
