import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { theme } from './builderTheme';
import { ThemeProvider } from '@material-ui/core/styles';

const ThemedApp = () => {
  return (
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
  )
}

ReactDOM.render(<ThemedApp />, document.querySelector('#root'))


