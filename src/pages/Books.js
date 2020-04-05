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
        fontWeight="bold"
        textDecoration="none"
        color="primary"
      >
        {value.name}
      </Link>
    ));
  };

  return (
    <>
      <BreadCrumb>
        <BreadCrumbItem to={{ pathname: '/' }}>Home</BreadCrumbItem>
        <BreadCrumbItem to={{ pathname, state: { version } }}>
          {version}
        </BreadCrumbItem>
      </BreadCrumb>
      <Box display="flex" flexDirection="column" alignItems="center" pt={2}>
        {error && <Text fontSize={[1, 3]}>Opss something went error</Text>}
        {!data && <Text fontSize={[1, 3]}>loading</Text>}
        {data && (
          <>
            <Text fontSize={[1, 3]}>Available Books</Text>
            {listBook()}
          </>
        )}
      </Box>
    </>
  );
};

Books.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default Books;
