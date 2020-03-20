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
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/books`,
  );

  const listBook = () => {
    return state.data.map(value => (
      <Link
        key={value.id}
        to={{ pathname: `/version/${bibleId}/books/${value.id}` }}
        fontSize={4}
        fontWeight="bold"
        textDecoration="none"
        color="primary"
      >
        {value.name}
      </Link>
    ));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={5}>
      {state.error && (
        <Text fontSize={3} my={2}>
          Opss something went error
        </Text>
      )}
      {state.loading && (
        <Text fontSize={3} my={2}>
          loading
        </Text>
      )}
      {state.data && (
        <>
          <Text fontSize={4} my={2}>
            Available Books
          </Text>
          {listBook()}
        </>
      )}
    </Box>
  );
};

Books.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Books;
