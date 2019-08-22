import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Layout, Navbar } from './components';
import Router from './Router/Router';
import routes from './Router/config';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Layout>
        <React.Fragment>
          <Navbar />
          <Switch>
            {routes.map(route => (
              <Router key={route.path} {...route} />
            ))}
          </Switch>
        </React.Fragment>
      </Layout>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
