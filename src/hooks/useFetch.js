import useSWR from 'swr';
import Axios from 'axios';

const useFetch = url => {
  const fetcher = async (...args) => {
    return Axios.get(...args, {
      headers: { 'api-key': process.env.REACT_APP_API_KEY },
    }).then(res => res.data);
  };

  const { data, error } = useSWR(url, fetcher);

  return { data, error };
};

export default useFetch;
