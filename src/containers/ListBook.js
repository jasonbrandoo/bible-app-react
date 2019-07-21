import React from 'react';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import Link from '../components/Link';
import List from '../components/List';

const ListBook = ({
  match: {
    params: { bibleId },
  },
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/books`,
  );

  let Books;

  if (state.data === null) {
    Books = <Text>loading</Text>;
  }
  if (state.error) {
    Books = <Text>Oopss something went error</Text>;
  }
  if (state.data) {
    Books = state.data.map(value => (
      <Link to={`/${bibleId}/books/${value.id}`}>{value.name}</Link>
    ));
  }

  return <List>{Books}</List>;
};

export default ListBook;
