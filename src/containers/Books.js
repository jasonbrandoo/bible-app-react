import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import Link from '../components/Link';
import List from '../components/List';

const Books = ({
  match: {
    params: { bibleId },
  },
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/books`,
  );

  const listBook = () => {
    return state.data.map(value => (
      <Link
        key={value.id}
        to={{ pathname: `/${bibleId}/books/${value.id}` }}
        size="1.2rem"
        bold="true"
      >
        {value.name}
      </Link>
    ));
  };

  return (
    <List>
      {state.error && (
        <Text size="1.5rem" margin="50vh 0 0 0">
          Opss something went error
        </Text>
      )}
      {state.data === null ? (
        <Text size="1.5rem" margin="50vh 0 0 0">
          loading
        </Text>
      ) : (
        <React.Fragment>
          <Text
            size="2rem"
            margin="6rem auto 1rem auto"
            padding="1rem"
            spacing="5px"
          >
            Available Books
          </Text>
          {listBook()}
        </React.Fragment>
      )}
    </List>
  );
};

Books.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Books;
