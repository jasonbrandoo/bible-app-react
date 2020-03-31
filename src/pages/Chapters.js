import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Box from '../components/Box';
import Link from '../components/Link';
import Text from '../components/Text';

const Chapters = ({
  match: {
    params: { bibleId, bookId },
  },
  location: {
    state: { version, name },
  },
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${bookId}/chapters`,
  );

  const listChapters = () => {
    return state.data.map((value, index) => {
      if (index === 0) {
        return null;
      }
      return (
        <Link
          key={value.id}
          to={{
            pathname: `/version/${bibleId}/passages/${value.id}`,
            state: {
              length: state.data.length,
              book: bookId,
              version,
              name,
            },
          }}
          fontSize={4}
          fontWeight="bold"
          textDecoration="none"
          color="primary"
        >
          {value.reference}
        </Link>
      );
    });
  };

  return (
    <>
      <Box display="flex" pt={5}>
        <Link
          to={{ pathname: '/' }}
          pl={3}
          pr={1}
          fontSize={4}
          textDecoration="none"
          fontWeight="bold"
          color="black"
        >
          Version /
        </Link>
        <Link
          to={{
            pathname: `/version/${bibleId}`,
            state: {
              version,
            },
          }}
          pr={1}
          fontSize={4}
          textDecoration="none"
          fontWeight="bold"
          color="black"
        >
          {`${version} /`}
        </Link>
        <Text fontSize={4} fontWeight="bold">
          {name}
        </Text>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center" pt={2}>
        {state.error && (
          <Text fontSize={3} my={2}>
            Opss something went error
          </Text>
        )}
        {!state.data && (
          <Text fontSize={3} my={2}>
            loading
          </Text>
        )}
        {state.data && (
          <>
            <Text fontSize={3} my={2}>
              Chapters
            </Text>
            {listChapters()}
          </>
        )}
      </Box>
    </>
  );
};

Chapters.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Chapters;
