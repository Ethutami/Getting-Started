export const getData = (data) => (dispatch) => {
    dispatch({
      type: 'GET_DATA_NEW_TASK',
      value: data,
    });
  };
  