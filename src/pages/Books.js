import React from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Box from '../components/Box';
import Link from '../components/Link';
import Text from '../components/Text';
import { BreadCrumb, BreadCrumbItem } from '../components/BreadCrumb';

const Books = ({
  match: {
    params: { bibleId },
  },
  location: {
    pathname,
    state: { version },
  },
}) => {
  const { data, error } = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/books`,
  );

  const listBook = () => {
    return data.data.map(value => (
      <Link
        key={value.id}
        to={{
          pathname: `/version/${bibleId}/books/${value.id}`,
          state: {
            version,
            book: value.name,
          },
        }}
        fontSize={[1, 4]}
        letterSpacing={1}
        textDecoration="none"
        color="primary"
      >
        {value.name}
      </Link>
    ));
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
        <Text fontSize={[1, 3]} letterSpacing={1}>
          Available Books
        </Text>
        {listBook()}
      </>
    );
  }

  return (
    <>
      <BreadCrumb>
        <BreadCrumbItem to={{ pathname: '/' }}>Home</BreadCrumbItem>
        <BreadCrumbItem to={{ pathname, state: { version } }}>
          {version}
        </BreadCrumbItem>
      </BreadCrumb>
      <Box display="flex" flexDirection="column" alignItems="center" pt={2}>
        {content}
      </Box>
    </>
  );
};

Books.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Books;
