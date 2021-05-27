import React from 'react';
import ChatApp from 'components/ChatApp';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ChatApp />
      </ThemeProvider>
    </Router>
  );
}

export default App;
