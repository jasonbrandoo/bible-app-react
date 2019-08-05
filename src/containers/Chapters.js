import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import Link from '../components/Link';
import List from '../components/List';

const Chapters = ({
  match: {
    params: { bibleId, bookId },
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
            pathname: `/${bibleId}/passages/${value.id}`,
            state: {
              length: state.data.length,
              book: bookId,
            },
          }}
          bold
          size="1.2rem"
        >
          {value.reference}
        </Link>
      );
    });
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
            Chapters
          </Text>
          {listChapters()}
        </React.Fragment>
      )}
    </List>
  );
};

Chapters.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Chapters;
