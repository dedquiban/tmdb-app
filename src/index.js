import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import { AppProvider } from './context/AppContext';

const meta = <meta name='viewport' content='initial-scale = 1.0'></meta>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {meta}
    <Provider store={store}>
      <Router basename='/'>
        <AppProvider>
          <App />
        </AppProvider>
      </Router>
    </Provider>
  </>
);
