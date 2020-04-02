import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { BrowserRouter, Switch } from 'react-router-dom';
import Box from './components/Box';
import Navbar from './components/Navbar';
import Router from './router';
import routes from './router/config';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Box>
        <>
          <Navbar />
          <Switch>
            {routes.map(route => (
              <Router key={route.path} {...route} />
            ))}
          </Switch>
        </>
      </Box>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
