import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle } from './tokens'
import { Layout } from './template'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Layout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
