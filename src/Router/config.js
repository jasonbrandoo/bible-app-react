import { Version, Books, Chapters, Passages } from '../containers';

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
