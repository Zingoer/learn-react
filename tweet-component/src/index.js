import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './Tweet';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Tweet />, document.getElementById('root'));
registerServiceWorker();
