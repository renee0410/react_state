import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './@style/index.scss';
import { store } from './@utils/redux/store/reduxStore';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename='/'>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
