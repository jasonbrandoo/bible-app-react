import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import List from '../components/List';

const Passages = ({
  match: {
    params: { bibleId, passagesId },
  },
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passagesId}`,
  );

  const listPassage = () => {
    const {
      data: { content },
    } = state;
    return (
      <div
        className="bible-content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    );
  };

  return (
    <List>
      {state.data === null ? (
        <Text size="1.5rem" margin="50vh 0 0 0">
          loading
        </Text>
      ) : (
        <React.Fragment>
          {listPassage()}
          <button>tes</button>
        </React.Fragment>
      )}
      {state.error && (
        <Text size="1.5rem" margin="50vh 0 0 0">
          Opss something went error
        </Text>
      )}
    </List>
  );
};

Passages.propTypes = {
  match: PropTypes.object.isRequired,
};

export default Passages;
