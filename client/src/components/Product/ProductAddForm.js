import React, { PropTypes } from 'react';
import { Card, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

class ProductAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      descripcion: '',
      precio: 0,
      esFinal: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  render() {
    const { descripcion, precio, esFinal } = this.state;
    return (
      <Card>
        <form onSubmit={this.handleSubmit}>
          <CardText>
            <Grid fluid>
              <Row>
                <Col xs>
                  <TextField
                    hintText="Descripcion"
                    value={descripcion}
                    onChange={e => this.setState({ descripcion: e.target.value })}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <TextField
                    hintText="Precio"
                    value={precio}
                    onChange={e => this.setState({ precio: parseInt(e.target.value || 0, 10) })}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs>
                  <Toggle
                    toggled={esFinal}
                    onToggle={(e, v) => this.setState({ esFinal: v })}
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

ProductAddForm.propTypes = {
  product: PropTypes.object,
  onSave: PropTypes.func,
};

export default ProductAddForm;