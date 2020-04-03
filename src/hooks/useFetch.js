import { useEffect, useReducer } from 'react';
import {
  initialState,
  reducer,
  FETCH_API,
  REFETCH_API,
  SUCCESS,
  ERROR,
} from '../reducer';

const useFetch = url => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let cancel = false;
    const controller = new AbortController();
    const { signal } = controller;

    if (!cancel) {
      const fetchVersion = async () => {
        dispatch({ type: FETCH_API, payload: url });
        try {
          const res = await fetch(url, {
            headers: {
              'api-key': process.env.REACT_APP_API_KEY,
            },
            signal,
          });
          const data = await res.json();
          dispatch({ type: SUCCESS, payload: data });
        } catch (error) {
          if (error.name === 'AbortError') {
            dispatch({ type: ERROR });
          } else {
            dispatch({ type: ERROR });
          }
        }
      };
      fetchVersion();
    }

    return () => {
      controller.abort();
      cancel = true;
    };
  }, [url]);

  const refetch = () => {
    dispatch({ type: REFETCH_API });
  };

  return [state, refetch];
};

export default useFetch;
