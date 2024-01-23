import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QntdItensContextProvider } from './context/QntdItensCarrinho';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QntdItensContextProvider>
      <App />
    </QntdItensContextProvider>
  </React.StrictMode>
);

reportWebVitals();
