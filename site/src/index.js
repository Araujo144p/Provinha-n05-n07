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
import Salario from './pages/salario';
import Temperatura from './pages/Temperatura';
import Abastecimento from './pages/Abastecimento';
import Contar from './pages/contar';
import Asteristicos from './pages/asteristicos';
import Retangulo from './pages/retangulo';
import Cafe from './pages/Café';
import Juros from './pages/juros';
import Aluno from './pages/alunos';
import Orçamento from './pages/orçamento';
import Compra from './pages/totalCompra';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Compra />
  </React.StrictMode>
);

