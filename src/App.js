import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import ListVersion from './containers/ListVersion';
import ListBook from './containers/ListBook';
import ListChapter from './containers/ListChapter';
import PassagesContainer from './containers/PassagesContainer';
import Layout from './components/layout/Layout';

const theme = {
  one: '#222831',
  two: '#393e46',
  three: '#00adb5',
  four: '#eeeeee',
};

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Layout>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ListVersion} />
          <Route exact path="/:bibleId" component={ListBook} />
          <Route exact path="/:bibleId/books/:bookId" component={ListChapter} />
          <Route
            exact
            path="/:bibleId/passages/:passagesId"
            component={PassagesContainer}
          />
        </Switch>
      </Layout>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
