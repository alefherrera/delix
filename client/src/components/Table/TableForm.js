import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';

const TableForm = ({ title, isBusy, onTableClick, onOrderClick }) => (
  <Card>
    <CardTitle title={title} />
    <CardText>
      <Grid fluid>
        <Row center="xs">
          <Col xs>
            <RaisedButton
              label={`${isBusy ? 'Liberar' : 'Ocupar'} Mesa`}
              onTouchTap={() => onTableClick()}
            />
          </Col>
          {
            isBusy && <Col xs>
              <RaisedButton label="Crear Pedido" onTouchTap={() => onOrderClick()} />
            </Col>
          }
        </Row>
      </Grid>
    </CardText>
  </Card>
  );

TableForm.propTypes = {
  title: PropTypes.string,
  isBusy: PropTypes.bool,
  onTableClick: PropTypes.func,
  onOrderClick: PropTypes.func,
};

export default TableForm;
