import React, { useEffect } from 'react';
import Button from './components/Button';
import { css } from 'linaria';
import { theme } from './config/theme';
import Header from './components/Header';

function App() {
  useEffect(() => {}, []);
  return (
    <div className={classes.global}>
      <Header></Header>
      <Button>button</Button>
      <Button raised>button</Button>
      <Button color="primary">button primary</Button>
      <Button color="primary" raised>
        button primary
      </Button>
    </div>
  );
}

export default App;

const classes = {
  global: css`
    :global() {
      body {
        margin: 0;
        font-family: 'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
          'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.background};
        color: ${theme.colors.black100};
      }

      *,
      *::after,
      *::before {
        box-sizing: border-box;
      }

      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
          monospace;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin: 0;
      }

      .container {
        max-width: 1100px;
        width: 100%;
        margin: 0 auto;
        padding: 0 15px;
      }
    }
  `,
};
