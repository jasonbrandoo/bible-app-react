import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Box from '../components/Box';
import Link from '../components/Link';
import Text from '../components/Text';
import { BreadCrumb, BreadCrumbItem } from '../components/BreadCrumb';

const Chapters = ({
  match: {
    params: { bibleId, bookId },
  },
  location: {
    pathname,
    state: { version, book },
  },
}) => {
  const { data, error } = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/books/${bookId}/chapters`,
  );

  const listChapters = () => {
    return data.data.map((value, index) => {
      if (index === 0) {
        return null;
      }
      return (
        <Link
          key={value.id}
          to={{
            pathname: `/version/${bibleId}/passages/${value.id}`,
            state: {
              length: data.data.length,
              bookId,
              version,
              book,
            },
          }}
          fontSize={[1, 4]}
          letterSpacing={1}
          textDecoration="none"
          textAlign="center"
          color="primary"
          width="100%"
        >
          {value.reference}
        </Link>
      );
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
        <Text
          fontSize={[1, 3]}
          letterSpacing={1}
          textAlign="center"
          width="100%"
        >
          Chapters
        </Text>
        {listChapters()}
      </>
    );
  }
  return (
    <>
      <BreadCrumb>
        <BreadCrumbItem to={{ pathname: '/' }}>Home</BreadCrumbItem>
        <BreadCrumbItem
          to={{ pathname: `/version/${bibleId}`, state: { version } }}
        >
          {version}
        </BreadCrumbItem>
        <BreadCrumbItem to={{ pathname, state: { version, book } }}>
          {book}
        </BreadCrumbItem>
      </BreadCrumb>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="100%"
        pt={2}
      >
        {content}
      </Box>
    </>
  );
};

Chapters.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Chapters;
