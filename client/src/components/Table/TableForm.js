import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { List } from 'material-ui/List';
import Fab from '../Fab';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { Link } from 'react-router';
import TableRow from './TableRow';
import Divider from 'material-ui/Divider';
import rowMenu from '../rowMenu';

const TableForm = ({ tables, editTable, deleteTable, addLink }) => (
  <Card>
    <CardTitle title="Mesas" />
    <CardText>
      <List>
        <Card>
          {
            tables.map((table, i) => (
              <div key={i}>
                <TableRow
                  disabled
                  table={table}
                  menu={
                    rowMenu(
                    () => editTable(table.id),
                    () => deleteTable(table.id))
                  }
                />
                <Divider />
              </div>
            ))
          }
        </Card>
      </List>
    </CardText>
    <Link to={addLink}>
      <Fab>
        <ContentAdd />
      </Fab>
    </Link>
  </Card>
);

TableForm.propTypes = {
  tables: PropTypes.array,
  editTable: PropTypes.func,
  deleteTable: PropTypes.func,
  addLink: PropTypes.string,
};

export default TableForm;
