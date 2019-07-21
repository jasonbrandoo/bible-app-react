import React from 'react';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import Link from '../components/Link';
import List from '../components/List';

const BookVersion = () => {
  const [state] = useFetch('https://api.scripture.api.bible/v1/bibles');

  let ListVersion;

  if (state.data === null) {
    ListVersion = <Text>loading</Text>;
  }
  if (state.error) {
    ListVersion = <Text>Oopss something went error</Text>;
  }
  if (state.data) {
    const { data } = state;
    data.sort((a, b) => {
      const A = a.language.name.toUpperCase();
      const B = b.language.name.toUpperCase();
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      return 0;
    });

    ListVersion = data.map(value => (
      <Link to={`/${value.id}`}>{value.name}</Link>
    ));
  }

  return <List>{ListVersion}</List>;
};

export default BookVersion;
