let number = ((state, action) => {
  if (action.type === 'ADD') {
    return state + 1;
  }

  return state || 0;
});

export default {
  number
};
