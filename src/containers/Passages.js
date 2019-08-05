import React, { useState, useEffect } from 'react';
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
  const [state, refetch] = useFetch(
    `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${passagesId}`,
  );
  const [total] = useState([...Array(chapter.length).keys()]);
  console.log(chapter);
  // useEffect(() => {
  //   console.log('cdm');
  //   const newPassageId = passagesId;
  //   if (passagesId !== newPassageId) {
  //     console.log('cdu');
  //   }
  // }, [passagesId]);

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
    for (let index = 0; index <= chapter.length; index += 1) {
      page.push(index);
    }
    refetch(
      `https://api.scripture.api.bible/v1/bibles/${bibleId}/passages/${id}${chap}`,
    );
    push(`/${bibleId}/passages/${id}${chap}`, {
      length: chapter.length,
      book: chapter.book,
    });
  };

  return (
    <List>
      {state.error && (
        <Text size="1.5rem" margin="50vh 0 0 0">
          Opss something went error
        </Text>
      )}
      {!state.data ? (
        <Text size="1.5rem" margin="50vh 0 0 0">
          loading
        </Text>
      ) : (
        <List content="true">
          {listPassage()}
          <ButtonGroup>
            {total.map((val, index) => {
              if (index) {
                return null;
              }
              return (
                <Button key={val} onClick={() => chapterList(val)}>
                  {val}
                </Button>
              );
            })}
          </ButtonGroup>
        </List>
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
