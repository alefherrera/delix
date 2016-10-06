import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';

class PromoAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      platos: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.promo);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  render() {
    return (
      <Card>
        <CardTitle title="Promo" />
        <form onSubmit={this.handleSubmit}>
          <CardText>
            PromoAddForm
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

PromoAddForm.propTypes = {
  promo: PropTypes.object,
  products: PropTypes.array,
  dishes: PropTypes.array,
  onSave: PropTypes.func,
};

export default PromoAddForm;
