import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Version from './containers/Version';
import Book from './containers/Books';
import Chapter from './containers/Chapters';
import Passages from './containers/Passages';
import Layout from './components/Layout';
import Books from './containers/Books';

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
            <Route exact path="/" component={Version} />
            <Route path="/:bibleId" component={Books} />
            <Route path="/:bibleId/books/:bookId" component={Chapter} />
            <Route path="/:bibleId/passages/:passagesId" component={Passages} />
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </Layout>
);

export default App;
