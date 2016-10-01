import React from 'react';
import SelectAddForm from '../components/Order/SelectAddForm';

const SelectAdd = () => (
  <SelectAddForm
    linkPromo={`${location.pathname}/promos`}
    linkProduct={`${location.pathname}/productos`}
    linkDish={`${location.pathname}/platos`}
  />
);

export default SelectAdd;
