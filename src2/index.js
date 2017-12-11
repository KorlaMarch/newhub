import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Links from './Links';

ReactDOM.render(<App links={Links} />, document.getElementById('root'));
registerServiceWorker();
