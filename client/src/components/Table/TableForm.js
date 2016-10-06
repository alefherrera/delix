import React, { PropTypes } from 'react';
import { Card, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router';

class TableForm extends React.Component {

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { tables } = this.props;
    return (
      <Card>
        <CardText>
          <SelectField value={this.state.value} onChange={this.handleChange}>
            {
              tables.map(table => (
                <MenuItem
                  value={table.id}
                  primaryText={table.nombre}
                />
              ))
            }
          </SelectField>
        </CardText>
        <CardActions>
          <Link to={`${location.pathname}/${this.state.value.id}`}>
            <RaisedButton label="Cerrar" />
          </Link>
        </CardActions>
      </Card>
    );
  }

}


TableForm.propTypes = {
  tables: PropTypes.array,
};

export default TableForm;
