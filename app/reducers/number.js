export default ((state, action) => {
  if (action.type === 'ADD') {
    return state + 1;
  }

  return state || 0;
});
