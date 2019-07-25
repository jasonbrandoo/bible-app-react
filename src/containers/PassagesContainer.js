import React from 'react';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import List from '../components/List';

const Passages = ({
  match: {
    params: { bibleId, passagesId },
  },
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passagesId}`,
  );

  let passage;

  if (state.data === null) {
    passage = <Text>loading</Text>;
  }
  if (state.error) {
    passage = <Text>Oopss something went error</Text>;
  }
  if (state.data) {
    const {
      data: { content },
    } = state;
    passage = <div dangerouslySetInnerHTML={{ __html: content }} />;
  }

  return <List>{passage}</List>;
};

export default Passages;
