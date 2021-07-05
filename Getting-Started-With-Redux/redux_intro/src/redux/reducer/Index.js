const initialState = {
    data: '',
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_DATA_NEW_TASK':
        return {
            ...state, 
            data: action.value};
  
      default:
        return state;
    }
  };
  
  export default reducer;
  