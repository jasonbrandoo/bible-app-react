import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Layout, Navbar } from './components';
import Router from './Router/Router';
import routes from './Router/config';

const theme = {
  one: '#222831',
  two: '#393e46',
  three: '#00adb5',
  four: '#eeeeee',
};

const App = () => (
  <Layout>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Navbar />
          <Switch>
            {routes.map(route => (
              <Router key={route.path} {...route} />
            ))}
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </Layout>
);

export default App;
