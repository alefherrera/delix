import React, { PropTypes } from 'react';
import { Card, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class TableForm extends React.Component {

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const { tables, onSetTable } = this.props;
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
          <RaisedButton label="Cerrar" onTouchTap={onSetTable} />
        </CardActions>
      </Card>
    );
  }

}


TableForm.propTypes = {
  tables: PropTypes.array,
  onSetTable: PropTypes.func,
};

export default TableForm;
