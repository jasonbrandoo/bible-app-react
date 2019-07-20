import { useEffect, useReducer } from 'react';
import {
  initialState,
  reducer,
  FETCH_API,
  // REFETCH_API,
  SUCCESS,
  ERROR,
} from '../reducer';

const useFetch = url => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchVersion = async () => {
      dispatch({ type: FETCH_API, payload: url });
      try {
        const res = await fetch(url, {
          headers: {
            'api-key': process.env.REACT_APP_API_KEY,
          },
        });
        const data = await res.json();
        dispatch({ type: SUCCESS, payload: data });
      } catch (error) {
        dispatch({ type: ERROR });
      }
    };
    fetchVersion();
  }, [url]);

  return [state];
};

export default useFetch;
