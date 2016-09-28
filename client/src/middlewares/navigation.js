const navigation = () => next => action => {
  if (action.payload.meta) {
    if (typeof action.payload.meta === 'function') {
      action.payload.meta(action.payload);
    }
  }
  return next(action);
};

export default navigation;
