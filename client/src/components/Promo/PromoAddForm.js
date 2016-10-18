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
import Subheader from 'material-ui/Subheader';
import debounce from 'lodash/debounce';

class PromoAddForm extends React.Component {

  state = {
    productos: [],
    platos: [],
    nombre: '',
    porcentajeDescuento: 0,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.promo) {
      this.setState(nextProps.promo);
    }
  }

  checkProduct = product =>
    this.state.productos.some(x => x.id === product.id)

  checkDish = dish =>
    this.state.platos.some(x => x.id === dish.id);

  handleProductToggle = (add, product) => {
    let productos;
    if (add) {
      productos = [...this.state.productos, product];
    } else {
      productos = this.state.productos.filter(x => x.id !== product.id);
    }
    this.setState({ productos });
  }

  handleDishToggle = (add, dish) => {
    let platos;
    if (add) {
      platos = [...this.state.platos, dish];
    } else {
      platos = this.state.platos.filter(x => x.id !== dish.id);
    }
    this.setState({ platos });
  }

  handleSliderChange = debounce((e, v) => {
    this.setState({ porcentajeDescuento: v });
  }, 300);

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSave(this.state);
  }

  render() {
    const { products, dishes } = this.props;
    const { nombre, porcentajeDescuento } = this.state;
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
                          rightToggle={
                            <Toggle
                              toggled={this.checkProduct(product)}
                              onToggle={
                                (e, v) =>
                                this.handleProductToggle(v, product)
                              }
                            />
                          }
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
                          rightToggle={
                            <Toggle
                              toggled={this.checkDish(dish)}
                              onToggle={(e, v) => this.handleDishToggle(v, dish)}
                            />
                          }
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
            <Subheader>
              {`Porcentaje de descuento: ${this.state.porcentajeDescuento}%`}
            </Subheader>
            <Slider
              max={100}
              step={1}
              value={porcentajeDescuento}
              onChange={(e, v) => this.handleSliderChange(e, v)}
            />
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
