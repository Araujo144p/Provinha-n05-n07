import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Index from './pages/acai/index.js';
import Sorveteria from './pages/sorveteria';
import Sorveteriabuttom from './pages/sorveteriabuttom';
import Signobuttom from './pages/signobuttom';


import Acaibuttom from './pages/acaibuttom';

import Signo from './pages/signo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sorveteriabuttom />
  </React.StrictMode>
);

