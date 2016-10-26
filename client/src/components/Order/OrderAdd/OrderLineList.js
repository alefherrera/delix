import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ListItem } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardText } from 'material-ui/Card';
import Restaurant from 'material-ui/svg-icons/maps/restaurant';
import Close from 'material-ui/svg-icons/navigation/close';
import Done from 'material-ui/svg-icons/action/done';
import DoneAll from 'material-ui/svg-icons/action/done-all';
import Alarm from 'material-ui/svg-icons/action/alarm';
import IconButton from 'material-ui/IconButton';

const getStatus = item => {
  switch (item.estado) {
    case 1:
      return <Restaurant />;
    case 2:
      return <Done />;
    case 3:
      return <DoneAll />;
    default:
      return <Alarm />;
  }
};

const showDelete = item => !item.estado || item.estado === 1;

const OrderLineList = ({ title, link, items, getPrimary,
  getSecondary, statusClick, removeClick }) => (
  <div>
    <ListItem
      disabled
      open
      primaryText={title}
      rightIcon={
        <Link to={link}>
          <ContentAdd />
        </Link>
      }
    />
    <Card>
      <CardText>
        <Grid>
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
                  <IconButton onTouchTap={() => statusClick(item)}>
                    {getStatus(item)}
                  </IconButton>
                  {
                    showDelete(item) && <IconButton onTouchTap={() => removeClick(item)}>
                      <Close />
                    </IconButton>
                  }
                </Col>
              </Row>
            )
            )
          }
        </Grid>
      </CardText>
    </Card>
  </div>
);

OrderLineList.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  items: PropTypes.array,
  getPrimary: PropTypes.func,
  getSecondary: PropTypes.func,
  statusClick: PropTypes.func,
  removeClick: PropTypes.func,
};

export default OrderLineList;
