import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import Link from '../components/Link';

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
    refetch();
    push(`/version/${bibleId}/passages/${id}${chap}`, {
      length: chapter.length,
      book: chapter.book,
      name: chapter.name,
      version: chapter.version,
    });
  };

  return (
    <>
      <Box display="flex" pt="5rem">
        <Link
          to={{
            pathname: `/version/${bibleId}`,
            state: {
              version: chapter.version,
            },
          }}
          pl={3}
          pr={1}
          fontSize={[1, 4]}
          textDecoration="none"
          color="text"
        >
          {`${chapter.version} /`}
        </Link>
        <Link
          to={{
            pathname: `/version/${bibleId}/books/${chapter.book}`,
            state: {
              version: chapter.version,
              name: chapter.name,
            },
          }}
          pr={1}
          fontSize={[1, 4]}
          textDecoration="none"
          color="text"
        >
          {`${chapter.name} /`}
        </Link>
        <Text fontSize={[1, 4]}>{passagesId.slice(4, 5)}</Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={2}
        mx="auto"
        my={0}
        width="75%"
      >
        {state.error && (
          <Text fontSize={[1, 3]}>Opss something went error</Text>
        )}
        {state.loading && <Text fontSize={[1, 3]}>loading</Text>}
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
    </>
  );
};

Passages.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Passages;
