import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Template from './components/template';
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Template />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
