import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';
import Text from '../components/Text';
import List from '../components/List';
import Link from '../components/Link';
import { ButtonGroup, Button } from '../components/Button';

const Passages = ({
  match: {
    params: { bibleId, passagesId },
  },
  location: { state: chapter },
  history: { push },
}) => {
  const [state] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passagesId}`,
  );
  const [total, setTotal] = useState([...Array(chapter).keys()]);
  console.log(total);
  const listPassage = () => {
    const {
      data: { content },
    } = state;
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    );
  };

  const chapterList = chap => {
    const id = passagesId.slice(0, 4);
    const page = [];
    for (let index = 0; index <= chapter; index += 1) {
      page.push(index);
    }
    push(`/${bibleId}/passages/${id}${chap}`);
  };

  return (
    <List>
      {!state.data ? (
        <Text size="1.5rem" margin="50vh 0 0 0">
          loading
        </Text>
      ) : (
        <List content="true">
          {listPassage()}
          <ButtonGroup>
            {total.map(val => (
              <Button key={val} onClick={() => chapterList(val)}>
                {val}
              </Button>
            ))}
          </ButtonGroup>
        </List>
      )}
      {state.error && (
        <Text size="1.5rem" margin="50vh 0 0 0">
          Opss something went error
        </Text>
      )}
    </List>
  );
};

Passages.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Passages;
