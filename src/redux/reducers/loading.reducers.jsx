const initialState = {
    isLoading: false,
};

const loadingReducers = (state = initialState, action) => {
    switch (action.type) {
        case "GET_LOADING_REQUEST":{
            state.loading = true;
            return {...state};
        }

        case "GET_LOADING_SUCESS":{
            state.loading = false;
            return {...state};
        }
    
        default:
            return {...state};
    }
}

export default loadingReducers;