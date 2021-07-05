// Fungsi Reducer ini :
// 1. Menyimpan Data (Initial State)
// 2. Menaruh function reducer

const initialState = {
  data: [],
  loading: false,
  error: '',
  total: 0,
};

const moviesReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_DATA':
      return {
        ...state,
        data: payload,
      };
    case 'UPDATE_DATA':
      return {
        ...state,
        data: payload,
      };
    case 'DELETE_DATA':
      return {
        ...state,
        data: payload,
      };
    case 'SET_TOTAL':
      return {
        ...state,
        total: payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: state.loading ===  true ? false : true,
      };
    default:
      return state;
  }
};

export default moviesReducer;
