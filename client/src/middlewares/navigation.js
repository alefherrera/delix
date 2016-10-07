import { push } from 'react-router-redux';

const navigation = ({ dispatch }) => next => action => {
  if (action.meta) {
    if (typeof action.meta === 'function') {
      const param = action.meta(action.payload);
      let base = `${location.pathname}/`;
      if (typeof param === 'string' && param.startsWith('/')) {
        base = '';
      }
      const { type, payload } = action;
      dispatch({ type, payload });
      dispatch(push(`${base}${param}`));
      return null;
    }
  }
  return next(action);
};

export default navigation;
