const initialState = {
    token: null,
    users: [],
    currentPage: 1,
    totalPages: 1,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOKEN':
        return { ...state, token: action.payload };
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload.data,
          currentPage: action.payload.page,
          totalPages: action.payload.total_pages,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;
  