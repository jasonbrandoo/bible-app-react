import React from 'react';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import Link from '../components/Link';
import List from '../components/List';
import Select from '../components/Select';

const BookVersion = ({ history }) => {
  const [state] = useFetch('https://api.scripture.api.bible/v1/bibles');

  const handleChange = event => {
    history.push(event.target.value);
  };

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
      <optgroup key={value} label={value}>
        {groupLang[value].map(version => (
          <option key={version.id} value={version.id}>
            {version.name}
          </option>
        ))}
      </optgroup>
    ));
  };

  return (
    <List>
      {state.data === null ? (
        <Text>loading</Text>
      ) : (
        <React.Fragment>
          <Text bold>Available version</Text>
          <Select change={handleChange}>{ListVersion()}</Select>
        </React.Fragment>
      )}
      {state.error && <Text>Oopss something went error</Text>}
    </List>
  );
};

export default BookVersion;
