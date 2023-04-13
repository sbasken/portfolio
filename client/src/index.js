import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={"Loading..."}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
