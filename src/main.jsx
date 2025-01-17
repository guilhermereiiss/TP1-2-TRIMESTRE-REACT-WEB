import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';
import './config/i18n';
import {StrictMode} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

