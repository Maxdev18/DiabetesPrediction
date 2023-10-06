import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { Survey } from './Survey';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Survey />
  </React.StrictMode>
);
