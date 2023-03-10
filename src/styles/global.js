import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle } from 'styled-components';

export const GlobalVars = {
  baseDIR: 'https://hi.isaquecosta.com.br/',

  color: {
    black: '#000000',
    white: '#FFFFFF',

    info: '#17a2b8',
    danger: '#dc3545',
    success: '#28a745',
    warning: '#feb805',

    green: '#7bfc51',
    yellow: '#feb805',
    purple: '#a42ef3',

    dark: '#4d3755',
    light: '#f1f1f1',
    transparent: 'transparent',
  },

  img: {
    logo_b: require('~/img/logo-c.png'),
    logo_w: require('~/img/logo-w.png'),
    client_logo: require('~/img/client-logo.png'),
    favicon: require('~/img/cube-c.png'),

    btm: require('~/img/btm-style.png'),
    background: require('~/img/background-tree-white.jpg'),
  },
};

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  a, select, button {
    cursor: pointer;
  }

  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-image: url('${GlobalVars.img.background}');
    background-repeat: repeat-y;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    background: transparent;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    width: 100%;
    min-height: 100%;
  }

  body, label, input, button {
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
    color: ${GlobalVars.color.dark};
  }

  .table-striped tbody tr:nth-of-type(odd) {
    background-color: #4d375514;
  }

  /*################## Material Icons ##################*/
  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url(https://fonts.gstatic.com/s/materialicons/v51/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');
  }

  i.mIcon {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 150%;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
  }

  /* btn Buttons */
  .btn {
    padding: 0.375rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    text-decoration: none !important;
  }

  .btn i {
    padding: 5px;
  }
  /*################## Material Icons ##################*/
`;
