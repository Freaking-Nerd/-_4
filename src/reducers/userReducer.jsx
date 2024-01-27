const initialState = {
    name: '',
    age: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default userReducer;