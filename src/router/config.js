import Version from '../containers/Version';
import Books from '../containers/Books';
import Chapters from '../containers/Chapters';
import Passages from '../containers/Passages';

const routes = [
  {
    path: '/',
    main: Version,
    exact: true,
  },
  {
    path: '/version/:bibleId',
    main: Books,
    exact: true,
  },
  {
    path: '/version/:bibleId/books/:bookId',
    main: Chapters,
    exact: true,
  },
  {
    path: '/version/:bibleId/passages/:passagesId',
    main: Passages,
    exact: true,
  },
  {
    path: '/:noMatch',
  },
];

export default routes;
