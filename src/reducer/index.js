export const FETCH_API = 'FETCH_API';
export const REFETCH_API = 'REFETCH_API';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const initialState = {
  url: '',
  data: null,
  loading: false,
  error: false,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_API:
      console.log({ type, payload });
      return {
        ...state,
        url: payload,
        loading: true,
      };
    case SUCCESS:
      console.log({ type, payload });
      return {
        ...state,
        data: payload.data,
        loading: false,
      };
    case REFETCH_API:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      console.log({ type, payload });
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};
