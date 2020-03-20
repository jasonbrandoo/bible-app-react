import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';

const Passages = ({
  match: {
    params: { bibleId, passagesId },
    isExact,
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
    refetch();
    push(`/version/${bibleId}/passages/${id}${chap}`, {
      length: chapter.length,
      book: chapter.book,
    });
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt={5}
      mx="auto"
      my={0}
      width="60%"
    >
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
          {listPassage()}
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            width="100%"
            mb={3}
          >
            {total.map((val, index) => {
              if (index === 0) {
                return null;
              }
              return (
                <Button
                  key={val}
                  bg="transparent"
                  color="primary"
                  borderColor="primary"
                  borderRadius="0.25rem"
                  m={1}
                  width="2rem"
                  onClick={() => chapterList(val)}
                >
                  {val}
                </Button>
              );
            })}
          </Box>
        </>
      )}
    </Box>
  );
};

Passages.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Passages;
