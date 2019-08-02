import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ListVersion from './containers/Version';
import ListBook from './containers/Books';
import ListChapter from './containers/Chapters';
import PassagesContainer from './containers/Passages';
import Layout from './components/Layout';

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
            <Route exact path="/" component={ListVersion} />
            <Route exact path="/:bibleId" component={ListBook} />
            <Route
              exact
              path="/:bibleId/books/:bookId"
              component={ListChapter}
            />
            <Route
              exact
              path="/:bibleId/passages/:passagesId"
              component={PassagesContainer}
            />
          </Switch>
        </React.Fragment>
      </ThemeProvider>
    </BrowserRouter>
  </Layout>
);

export default App;
