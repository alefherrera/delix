import React, { PropTypes } from 'react';
import { Card, CardText } from 'material-ui/Card';
import { Tabs, Tab } from 'material-ui/Tabs';
import SectorDetail from './SectorDetail';

const SectorForm = ({ sectors, onTableSelect }) => (
  <Card>
    <CardText>
      <Tabs>
        {
          sectors.map((sector, i) => (
            <Tab
              key={i}
              label={`Sector ${sector.id}`}
            >
              <Card>
                <SectorDetail
                  tables={sector.gruposDeMesas}
                  onSelect={onTableSelect}
                />
              </Card>
            </Tab>
          ))
        }
      </Tabs>
    </CardText>
  </Card>
);

SectorForm.propTypes = {
  sectors: PropTypes.array,
  onTableSelect: PropTypes.func,
};

export default SectorForm;
