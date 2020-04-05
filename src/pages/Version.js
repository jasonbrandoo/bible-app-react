import React from 'react';
import useFetch from '../hooks/useFetch';
import Box from '../components/Box';
import Link from '../components/Link';
import Text from '../components/Text';

const Version = () => {
  const { data, error } = useFetch('https://api.scripture.api.bible/v1/bibles');

  const listVersion = () => {
    const sortLang = data.data.sort((a, b) => {
      const A = a.language.name.toUpperCase();
      const B = b.language.name.toUpperCase();
      if (A < B) {
        return -1;
      }
      if (A > B) {
        return 1;
      }
      return 0;
    });

    const groupLang = sortLang.reduce((acc, obj) => {
      const key = obj.language.name;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(obj);
      return acc;
    }, {});

    return Object.keys(groupLang).map(value => (
      <Box
        my={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        key={value}
      >
        <Text textAlign="center" fontWeight="bold" fontSize={[2, 4]}>
          {value}
        </Text>
        {groupLang[value].map(version => (
          <Link
            key={version.id}
            to={{
              pathname: `/version/${version.id}`,
              state: {
                version: version.name,
              },
            }}
            fontSize={[1, 3]}
            textDecoration="none"
            color="primary"
          >
            {version.name}
          </Link>
        ))}
      </Box>
    ));
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={6}>
      {error && <Text fontSize={[1, 3]}>Opss something went error</Text>}
      {!data && <Text fontSize={[1, 3]}>loading</Text>}
      {data && (
        <>
          <Text fontSize={[1, 3]}>Available version</Text>
          {listVersion()}
        </>
      )}
    </Box>
  );
};

export default Version;
