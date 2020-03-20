export const FETCH_API = 'FETCH_API';
export const REFETCH_API = 'REFETCH_API';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const initialState = {
  url: '',
  loading: false,
  error: false,
  data: null,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case FETCH_API:
      return {
        ...state,
        url: payload,
        loading: true,
      };
    case SUCCESS:
      return {
        ...state,
        data: payload.data,
        loading: false,
      };
    case REFETCH_API:
      return {
        ...state,
        data: null,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      throw new Error();
  }
};
