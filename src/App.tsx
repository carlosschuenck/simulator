import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Template from './components/template';
import GlobalStyle from './styles/global';
import { Provider } from 'react-redux'
import store from './redux'

function App() {
  return (
    <Provider store={store}> 
      <BrowserRouter>
        <Template />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
