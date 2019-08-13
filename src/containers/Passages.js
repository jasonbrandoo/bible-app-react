import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import { Text, List, Button } from '../components';

const Passages = ({
  match: {
    params: { bibleId, passagesId },
  },
  location: { state: chapter },
  history: { push },
}) => {
  const [state, refetch] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passagesId}`,
  );
  const [total] = useState([...Array(chapter.length).keys()]);

  const listPassage = () => {
    const {
      data: { content },
    } = state;
    return (
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    );
  };

  const chapterList = chap => {
    const id = passagesId.slice(0, 4);
    refetch(
      `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${id}${chap}`,
    );
    push(`/version/${bibleId}/passages/${id}${chap}`, {
      length: chapter.length,
      book: chapter.book,
    });
  };

  return (
    <List>
      {state.error && (
        <Text size="1.5rem" margin="50vh 0 0 0">
          Opss something went error
        </Text>
      )}
      {!state.data && (
        <Text size="1.5rem" margin="50vh 0 0 0">
          loading
        </Text>
      )}
      {state.data && (
        <List content="true">
          {listPassage()}
          <List group>
            {total.map((val, index) => {
              if (index === 0) {
                return null;
              }
              return (
                <Button key={val} onClick={() => chapterList(val)}>
                  {val}
                </Button>
              );
            })}
          </List>
        </List>
      )}
    </List>
  );
};

Passages.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Passages;
