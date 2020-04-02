import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Box from '../components/Box';
import Link from '../components/Link';
import Text from '../components/Text';

const Books = ({
  match: {
    params: { bibleId },
  },
  location: {
    state: { version },
  },
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/books`,
  );

  const listBook = () => {
    return state.data.map(value => (
      <Link
        key={value.id}
        to={{
          pathname: `/version/${bibleId}/books/${value.id}`,
          state: {
            version,
            name: value.name,
          },
        }}
        fontSize={[1, 4]}
        fontWeight="bold"
        textDecoration="none"
        color="primary"
      >
        {value.name}
      </Link>
    ));
  };

  return (
    <>
      <Box display="flex" pt="5rem">
        <Link
          to={{ pathname: '/' }}
          pl={3}
          pr={1}
          fontSize={[1, 4]}
          textDecoration="none"
          color="text"
        >
          Version /
        </Link>
        <Text fontSize={[1, 4]}>{version}</Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" pt={2}>
        {state.error && (
          <Text fontSize={[1, 3]}>Opss something went error</Text>
        )}
        {state.loading && <Text fontSize={[1, 3]}>loading</Text>}
        {state.data && (
          <>
            <Text fontSize={[1, 3]}>Available Books</Text>
            {listBook()}
          </>
        )}
      </Box>
    </>
  );
};

Books.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Books;
