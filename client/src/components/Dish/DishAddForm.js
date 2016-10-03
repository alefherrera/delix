import React, { PropTypes } from 'react';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class DishAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: '',
      descripcion: '',
      precio: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  render() {
    const { descripcion, precio, nombre } = this.state;
    return (
      <Card>
        <form onSubmit={this.handleSubmit}>
          <CardText>
            <Grid fluid>
              <Row>
                <Col xs={2}>
                  <h3>Nombre</h3>
                </Col>
                <Col xs>
                  <TextField
                    hintText="Nombre"
                    value={nombre}
                    onChange={e => this.setState({ nombre: e.target.value })}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <h3>Descripcion</h3>
                </Col>
                <Col xs>
                  <TextField
                    hintText="Descripcion"
                    value={descripcion}
                    onChange={e => this.setState({ descripcion: e.target.value })}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <h3>Precio</h3>
                </Col>
                <Col xs>
                  <TextField
                    hintText="Precio"
                    value={precio}
                    onChange={e => this.setState({ precio: parseInt(e.target.value || 0, 10) })}
                  />
                </Col>
              </Row>
            </Grid>
          </CardText>
          <CardActions>
            <RaisedButton type="submit" label="Guardar" />
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
