import React from 'react';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import Link from '../components/Link';
import List from '../components/List';

const BookVersion = () => {
  const [state] = useFetch('https://api.scripture.api.bible/v1/bibles');

  const ListVersion = () => {
    const { data } = state;

    const sortLang = data.sort((a, b) => {
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

    const groupLang = sortLang.reduce((acc, obj) => {
      const key = obj.language.name;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});

    return Object.keys(groupLang).map(value => (
      // <Link to={`/${value.id}`}>{value.name}</Link>
      <React.Fragment>
        <Text key={value} size="2rem" borderTop bold>
          {value}
        </Text>
        {groupLang[value].map(version => (
          <Link key={version.id} to={`${version.id}`} size="1.2rem">
            {version.name}
          </Link>
        ))}
      </React.Fragment>
    ));
  };

  return (
    <List>
      {state.data === null ? (
        <Text size="1.2rem">loading</Text>
      ) : (
        <React.Fragment>
          <Text bold size="2rem">
            Available version
          </Text>
          {ListVersion()}
        </React.Fragment>
      )}
      {state.error && <Text>Oopss something went error</Text>}
    </List>
  );
};

export default BookVersion;
