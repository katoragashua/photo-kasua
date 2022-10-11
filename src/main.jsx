import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {ContextProvider} from './Context.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
<ContextProvider>
  <BrowserRouter>
     <React.StrictMode>
        <App />
    </React.StrictMode> 
  </BrowserRouter>
</ContextProvider>
)
