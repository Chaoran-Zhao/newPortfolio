import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import { Tolgee, DevTools, TolgeeProvider, FormatSimple } from "@tolgee/react";

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init({
    language: 'en',

    // for development
    apiUrl: process.env.REACT_APP_TOLGEE_API_URL,
    apiKey: process.env.REACT_APP_TOLGEE_API_KEY,

    // for production
    staticData : {
      en: () => import('./texts/en.json'),
      ch: () => import('./texts/ch.json'),
    }
  });




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <TolgeeProvider
        tolgee={tolgee}       
        fallback="Loading..." 
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
      
    </TolgeeProvider>
  // </React.StrictMode>
);


