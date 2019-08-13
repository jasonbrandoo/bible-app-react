import React from 'react';
import useFetch from '../hooks/useFetch';
import { Text, Link, List } from '../components';

const Version = () => {
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
      <React.Fragment key={value}>
        <Text key={value} size="1.5rem" bold>
          {value}
        </Text>
        {groupLang[value].map(version => (
          <Link
            key={version.id}
            to={{ pathname: `/version/${version.id}` }}
            size="1.2rem"
          >
            {version.name}
          </Link>
        ))}
      </React.Fragment>
    ));
  };

  return (
    <List>
      {state.error && (
        <Text size="1.5rem" margin="50vh 0 0 0">
          Opss something went error
        </Text>
      )}
      {state.loading && (
        <Text size="1.5rem" margin="50vh 0 0 0">
          loading
        </Text>
      )}
      {state.data && (
        <React.Fragment>
          <Text
            size="2rem"
            margin="6rem auto 1rem auto"
            padding="1rem"
            spacing="5px"
          >
            Available version
          </Text>
          {ListVersion()}
        </React.Fragment>
      )}
    </List>
  );
};

export default Version;
