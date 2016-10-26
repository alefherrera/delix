import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class DishAddForm extends React.Component {

  state = {
    nombre: '',
    descripcion: '',
    precio: 0,
  };

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.dish);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  render() {
    const { descripcion, precio, nombre } = this.state;
    return (
      <Card>
        <CardTitle title="Plato" />
        <form onSubmit={this.handleSubmit}>
          <CardText>
            <Grid fluid>
              <Row>
                <Col xs>
                  <TextField
                    floatingLabelText="Nombre"
                    value={nombre}
                    onChange={e => this.setState({ nombre: e.target.value })}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <TextField
                    floatingLabelText="Descripcion"
                    value={descripcion}
                    onChange={e => this.setState({ descripcion: e.target.value })}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <TextField
                    floatingLabelText="Precio"
                    value={precio}
                    onChange={e => this.setState({ precio: parseInt(e.target.value || 0, 10) })}
                  />
                </Col>
              </Row>
            </Grid>
          </CardText>
          <CardActions>
            <Grid fluid>
              <Row center="xs">
                <Col xs>
                  <RaisedButton type="submit" label="Guardar" />
                </Col>
              </Row>
            </Grid>
          </CardActions>
        </form>
      </Card>
    );
  }

}

DishAddForm.propTypes = {
  dish: PropTypes.object,
  onSave: PropTypes.func,
};

export default DishAddForm;
