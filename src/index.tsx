import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import story from './story';

ReactDOM.render(
  <Provider store={story}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
