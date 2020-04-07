import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Box from '../components/Box';
import Button from '../components/Button';
import Text from '../components/Text';
import { BreadCrumb, BreadCrumbItem } from '../components/BreadCrumb';

const Passages = ({
  match: {
    params: { bibleId, passagesId },
  },
  location: { pathname, state: chapter },
  history: { push },
}) => {
  const { data, error } = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passagesId}`,
  );
  const [total] = useState([...Array(chapter.length).keys()]);

  const listPassage = () => {
    const {
      data: { content },
    } = data;
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
    // refetch();
    push(`/version/${bibleId}/passages/${id}${chap}`, {
      length: chapter.length,
      bookId: chapter.bookId,
      book: chapter.book,
      name: chapter.name,
      version: chapter.version,
    });
  };

  let content;

  if (error) {
    content = (
      <>
        <Text fontSize={[1, 3]}>Opss something went error</Text>
        <Text fontSize={[1, 3]}>
          Please make sure you have internet connection
        </Text>
      </>
    );
  } else if (!data) {
    content = <Text fontSize={[1, 3]}>Loading...</Text>;
  } else {
    content = (
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
                color="text"
                borderColor="text"
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
    );
  }
  return (
    <>
      <BreadCrumb>
        <BreadCrumbItem to={{ pathname: '/' }}>Home</BreadCrumbItem>
        <BreadCrumbItem
          to={{
            pathname: `/version/${bibleId}`,
            state: {
              version: chapter.version,
            },
          }}
        >
          {chapter.version}
        </BreadCrumbItem>
        <BreadCrumbItem
          to={{
            pathname: `/version/${bibleId}/books/${chapter.bookId}`,
            state: {
              version: chapter.version,
              book: chapter.book,
            },
          }}
        >
          {chapter.book}
        </BreadCrumbItem>
        <BreadCrumbItem
          to={{
            pathname,
            state: {
              version: chapter.version,
              bookId: chapter.bookId,
              book: chapter.book,
              length: chapter.length,
            },
          }}
        >
          {passagesId.slice(4, 5)}
        </BreadCrumbItem>
      </BreadCrumb>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={2}
        mx="auto"
        my={0}
        width="75%"
      >
        {content}
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
