import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { Grommet } from 'grommet';
import "./index.css"

const theme = {
  global: {
    font: {
      family: 'inherit',
      size: '16px',
      height: '1.35',
    },
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Grommet plain>
      <App />
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
);
