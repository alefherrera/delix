import hh from '../history';

const navigation = ({ getState, dispatch }) => next => action => {
  if (action.meta) {
    if (typeof action.meta === 'function') {
      const param = action.meta(action.payload);
      const pathname = getState().routing.locationBeforeTransitions.pathname;
      let base = `${pathname}/`;
      if (typeof param === 'string' && param.startsWith('/')) {
        base = '';
      }
      const { type, payload } = action;
      dispatch({ type, payload });
      hh.push(`${base}${param}`);
      return null;
    }
  }
  return next(action);
};

export default navigation;
