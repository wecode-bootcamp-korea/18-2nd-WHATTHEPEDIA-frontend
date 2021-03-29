import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './Styles/reset.scss';
import './Styles/common.scss';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
  }

  body {
    box-sizing: border-box;
    }

  button:hover {
    cursor: pointer;
  }  
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
