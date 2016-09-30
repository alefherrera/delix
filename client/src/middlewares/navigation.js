import { push } from 'react-router-redux';

const navigation = ({ dispatch }) => next => action => {
  if (action.meta) {
    if (typeof action.meta === 'function') {
      const param = action.meta(action.payload);
      const { type, payload } = action;
      dispatch({ type, payload });
      dispatch(push(`${location.pathname}/${param}`));
      return null;
    }
  }
  return next(action);
};

export default navigation;
