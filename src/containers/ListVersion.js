import React from 'react';
// import Sidebar from '../components/layout/Sidebar';
import useFetch from '../hooks/useFetch';

const BookVersion = () => {
  const [state] = useFetch('https://api.scripture.api.bible/v1/bibles');
  console.log(state.error);

  let ListVersion;

  if (state.data === null) {
    ListVersion = <p>loading</p>;
  }
  if (state.error) {
    ListVersion = <p>Oopss something went error</p>;
  }
  if (state.data) {
    ListVersion = state.data.map(value => <p>{value.name}</p>);
  }

  return <React.Fragment>{ListVersion}</React.Fragment>;
};

export default BookVersion;
