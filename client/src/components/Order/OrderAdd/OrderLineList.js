import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ListItem } from 'material-ui/List';
import ContentAdd from 'material-ui/svg-icons/content/add';
import NavigationCheck from 'material-ui/svg-icons/navigation/check';

const merge = (first, second) => {
  if (!first) return second;
  if (!second) return first;
  return [...first, ...second];
};

const OrderLineList = ({ title, link, saved, pending, getPrimary, getSecondary }) => {
  const renderItem = isSaved => (item, i) => (
    <ListItem
      key={i}
      disabled
      primaryText={getPrimary(item)}
      secondaryText={getSecondary(item)}
      rightIcon={
        isSaved ? <NavigationCheck /> : undefined
        }
    />
  );

  return (
    <ListItem
      disabled
      open
      primaryText={title}
      rightIcon={
        <Link to={link}>
          <ContentAdd />
        </Link>
      }
      nestedItems={
        merge(saved && saved.map(renderItem(true)),
        pending && pending.map((item, i) => renderItem(false)(item, saved.length + i)))
      }
    />
  );
};

OrderLineList.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  saved: PropTypes.array,
  pending: PropTypes.array,
  getPrimary: PropTypes.func,
  getSecondary: PropTypes.func,
};

export default OrderLineList;
