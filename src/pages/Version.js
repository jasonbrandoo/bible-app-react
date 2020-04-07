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
        <Text
          textAlign="center"
          fontWeight="bold"
          letterSpacing={1}
          fontSize={[2, 4]}
        >
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
            letterSpacing={1}
            textDecoration="none"
            textAlign="center"
            color="primary"
          >
            {version.name}
          </Link>
        ))}
      </Box>
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
          Available version
        </Text>
        {listVersion()}
      </>
    );
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" pt={6}>
      {content}
    </Box>
  );
};

export default Version;
