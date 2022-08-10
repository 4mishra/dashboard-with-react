import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    --rd-theme-color: #282c34;
    
    --rd-primary-color: #61dafb;
    --rd-secondary-color: #f8f8f8;
    --rd-tertiary-color: #282c34;
    
    --rd-white-color: #ffffff;
    --rd-black-color: #333333;

    --rd-border-primary-color: #4c5463;
    --rd-border-secondary-color: #717c92;
    --rd-border-tertiary-color: #ececec;
    
    --rd-heading-color: #a0a8b6;
    --rd-text-color: #d0d3db;

    --rd-success-color: #198754;
    --rd-info-color: #0d6efd;
    --rd-error-color: #bb2d3b;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    color: var(--rd-primary-color);
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: var(--rd-primary-color);
    font-weight: bold;
    margin: 0 0 1.5rem 0;
    padding: 0;
    line-height: 1;
  }
  
  p,
  span {
    font-size: 17px;
    color: var(--rd-text-color);
    margin: 0 0 1.5rem 0;
  }
  
  a,
  p > a {
    color: var(--rd-primary-color);
    text-decoration: none;
    transition: color 0.2s ease-out 0s;
    
    &:hover,
    &:focus {
      color: var(--rd-primary-color);
      border-bottom: 1px solid var(--rd-primary-color);
      text-decoration: none;
    }
  }
`