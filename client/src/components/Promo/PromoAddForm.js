import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText, CardActions } from 'material-ui/Card';
import { Grid, Row, Col } from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import Divider from 'material-ui/Divider';
import ProductRow from '../Product/ProductRow';
import DishRow from '../Dish/DishRow';
import Toggle from 'material-ui/Toggle';
import { ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';

class PromoAddForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productos: [],
      platos: [],
      nombre: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.promo) {
      this.setState(nextProps.promo);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  render() {
    const { products, dishes } = this.props;
    const { nombre } = this.state;
    return (
      <Card>
        <CardTitle title="Promo" />
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
            </Grid>
            <Card>
              <Tabs>
                <Tab label="Productos">
                  {
                    products && products.map((product, i) => (
                      <div key={i}>
                        <ListItem
                          disabled
                          innerDivStyle={{ padding: '0 60px 0 0' }}
                          rightToggle={<Toggle />}
                        >
                          <ProductRow
                            disabled
                            product={product}
                          />
                        </ListItem>
                        <Divider />
                      </div>
                    ))
                  }
                </Tab>
                <Tab label="Platos">
                  {
                    dishes && dishes.map((dish, i) => (
                      <div key={i}>
                        <ListItem
                          disabled
                          innerDivStyle={{ padding: '0 60px 0 0' }}
                          rightToggle={<Toggle />}
                        >
                          <DishRow
                            disabled
                            dish={dish}
                          />
                        </ListItem>
                        <Divider />
                      </div>
                    ))
                  }
                </Tab>
              </Tabs>
            </Card>
            <Slider />
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
