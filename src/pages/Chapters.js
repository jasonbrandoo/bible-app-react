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
          fontWeight="bold"
          textDecoration="none"
          color="primary"
        >
          {value.reference}
        </Link>
      );
    });
  };

  let content;

  if (error) {
    content = (
      <Text fontSize={[1, 3]} fontWeight="bold">
        Opss something went error
      </Text>
    );
  }
  if (!data) {
    content = (
      <Text fontSize={[1, 3]} fontWeight="bold">
        loading
      </Text>
    );
  } else {
    content = (
      <>
        <Text fontSize={[1, 3]} fontWeight="bold">
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
      <Box display="flex" flexDirection="column" alignItems="center" pt={2}>
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
