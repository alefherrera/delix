import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';

class TableForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, k, value) {
    this.setState({
      value,
    });
  }

  render() {
    const { tables } = this.props;
    return (
      <Card>
        <CardTitle title="Mesa" />
        <CardText>
          <Grid fluid>
            <Row center="xs">
              <Col xs>
                <SelectField
                  hintText="Seleccione mesa"
                  value={this.state.value}
                  onChange={this.handleChange}
                >
                  {
                    tables.map((table, i) => (
                      <MenuItem
                        key={i}
                        value={table}
                        primaryText={table.nombre}
                      />
                    ))
                  }
                </SelectField>
              </Col>
            </Row>
          </Grid>
        </CardText>
        <CardActions>
          <Grid fluid>
            <Row center="xs">
              <Col xs>
                <Link to={`${location.pathname}/${this.state.value.id}`}>
                  <RaisedButton label="Cerrar" />
                </Link>
              </Col>
            </Row>
          </Grid>
        </CardActions>
      </Card>
    );
  }

}

TableForm.propTypes = {
  tables: PropTypes.array,
};

export default TableForm;
