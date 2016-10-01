import React, { PropTypes } from 'react';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const SelectAddForm = ({ linkPromo, linkProduct, linkDish }) => (
  <Card>
    <CardText>
      Seleccionar que agregar
    </CardText>
    <CardActions>
      <Grid fluid>
        <Row center="xs">
          <Col xs>
            <Link to={linkPromo}>
              <RaisedButton label="Promos" />
            </Link>
          </Col>
          <Col xs>
            <Link to={linkProduct}>
              <RaisedButton label="Productos" />
            </Link>
          </Col>
          <Col xs>
            <Link to={linkDish}>
              <RaisedButton label="Platos" />
            </Link>
          </Col>
        </Row>
      </Grid>
    </CardActions>
  </Card>
);

SelectAddForm.propTypes = {
  linkPromo: PropTypes.string,
  linkProduct: PropTypes.string,
  linkDish: PropTypes.string,
};

export default SelectAddForm;
