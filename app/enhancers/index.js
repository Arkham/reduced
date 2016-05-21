import redux from 'npm:redux';

let devtools = window.devToolsExtension ?  window.devToolsExtension() : f => f;

export default redux.compose(devtools);
