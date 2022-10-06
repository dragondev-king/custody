import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import "@coinlist/css-framework/sass/application_template.sass";
import './index.css';
import initAmplify from 'utils/initAmplify';
import AuthContextProvider from './components/AuthContext/AuthContext';

initAmplify()


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthContextProvider>
    </React.StrictMode>,
);
