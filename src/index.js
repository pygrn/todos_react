import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize'

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
