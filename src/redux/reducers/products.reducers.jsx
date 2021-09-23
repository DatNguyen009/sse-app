const initialState = {
    loading: false,
    listProduct: [],
    error: false,
  };
  
  const productsReducers = (state = initialState, action) => {
    switch (action.type) {
      case "GET_PRODUCT_LIST_REQUEST":{
        state.loading = true;
        state.listProduct = null;
        state.error = false;
        return {...state};
      }
  
      case "GET_PRODUCT_LIST_SUCCESS":{
        state.loading = false;
        state.listProduct = action.payload;
        state.error = false;
        return {...state};
      }
        
      case "GET_PRODUCT_LIST_FAIL":{
        state.loading = false;
        state.listProduct = null;
        state.error = true;
        return {...state};
      }
      
  
      case "ADD_PRODUCT":{
        const newlist = [...state.listProduct];
        newlist.push(action.payload);
        return {...state, listProduct: newlist};
      }
  
      default:
        return state;
    }
  };
  
  export default productsReducers;
  