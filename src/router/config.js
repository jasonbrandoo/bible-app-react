import Version from '../pages/Version';
import Books from '../pages/Books';
import Chapters from '../pages/Chapters';
import Passages from '../pages/Passages';

const routes = [
  {
    path: '/',
    main: Version,
    exact: true,
    label: 'Home',
  },
  {
    path: '/version/:bibleId',
    main: Books,
    exact: true,
    label: 'Books',
  },
  {
    path: '/version/:bibleId/books/:bookId',
    main: Chapters,
    exact: true,
    label: 'Chapters',
  },
  {
    path: '/version/:bibleId/passages/:passagesId',
    main: Passages,
    exact: true,
    label: 'Passages',
  },
  {
    path: '/:noMatch',
    label: 'Not Found',
  },
];

export default routes;
